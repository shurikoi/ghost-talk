import csv
import http.server
import json
import re
from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
from time import perf_counter

csv_file = fr'OPTED-Dictionary.csv'


def csv_initialisation():
    print("initialisation csv data...")

    with open(csv_file, 'r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file, quotechar='~')
        data = list(csv_reader)

    print("Successful initialization of csv")
    return data


def partofspeech_convert(partofspeech: str) -> str:
    if partofspeech == 'nouns':
        return 'n.'
    elif partofspeech == 'adjectives':
        return 'a.'
    elif partofspeech == 'verbs':
        return 'v.'
    elif partofspeech == 'adverbs':
        return 'adv.'
    else:
        return 'error'


def generate_word_definition_mapping(csv_data: list, word_list: list, amount: int, pospeech: str) -> dict:
    word_definition_mapping = {}
    encountered_words = set()

    for row in csv_data:
        word = row['Word']
        if word in word_list and word not in encountered_words and pospeech in row['POS']:
            definition = row['Definition']
            word_definition_mapping[word] = definition
            encountered_words.add(word)
            amount -= 1
            if amount <= 0:
                return word_definition_mapping
    return word_definition_mapping


def is_word(s):
    return re.match("^[a-zA-Z]+$", s)


# def create_response()
def parse_web_page(url):
    try:
        req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(req) as response:
            html = response.read()

        soup = BeautifulSoup(html, 'html.parser')

        page_text = soup.get_text()

        return page_text
    except Exception as e:
        print(f"An error occurred: {e}")
        return False, e


def response_check(data_to_check: str) -> bool:
    list_to_check_keys = ['reqId', 'typeContent', 'resource', 'partOfSpeech', 'amountOfCards']
    list_to_check_part_of_speach = ["nouns", "adjectives", "verbs", "adverbs"]

    try:
        data_to_check = json.loads(data_to_check)
    except Exception as e:
        print(f"An error occurred: {e}")
        return False

    for key in list_to_check_keys:
        if key not in data_to_check:
            return False
        if data_to_check[key] == "":
            return False

    if data_to_check['partOfSpeech'] not in list_to_check_part_of_speach:
        return False

    return True


class JSONRequestHandler(http.server.BaseHTTPRequestHandler):
    csv_data_ = csv_initialisation()

    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_POST(self):
        s_t = perf_counter()
        print("Post resp start...")

        if self.path == 'status':
            self.send_response(100)
            self.end_headers()
            self.wfile.write("Status: Ok".encode('utf-8'))
            print("Status check")
            return

        elif self.path != '/create_cards':
            self.send_response(404)
            self.end_headers()
            self.wfile.write("Error 404: Not Found".encode('utf-8'))
            print("Error: 404")
            return

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        decoded_data = post_data.decode('utf-8')

        if not response_check(decoded_data):
            self.send_response(401)
            self.end_headers()
            self.wfile.write("Error 401: Bad Request".encode('utf-8'))
            print("Error: 401")
            return 'error 401'

        self._set_headers()

        json_data = json.loads(decoded_data)

        amount_of_cards = json_data['amountOfCards']
        pospeech_ = partofspeech_convert(json_data['partOfSpeech'])
        typecontent = json_data['typeContent']
        reqid = json_data['reqId']

        if typecontent == 'link':
            time_parse_s = perf_counter()
            page_text = parse_web_page(json_data['resource'])
            if isinstance(page_text, tuple):
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f"{page_text[1]}".encode('utf-8'))
                print("Error: 500")
                return
            words = page_text.split()
            time_parse_e = perf_counter()
            print(f"parse time: {time_parse_e - time_parse_s} s")

        elif typecontent == 'text':
            words = json_data['resource']
            if not isinstance(words, list):
                self.send_response(401)
                self.end_headers()
                self.wfile.write("Error 401: Bad Request".encode('utf-8'))
                print("Error: 401")
                return 'error 401'
        else:
            self.send_response(401)
            self.end_headers()
            self.wfile.write("Error 401: Bad Request".encode('utf-8'))
            print("Error: 401")
            return 'error 401'

        unique_words = set(words)
        filtered_list = [word.capitalize() for word in unique_words if is_word(word)]

        time_sapostication_s = perf_counter()
        word_definition_mapping = generate_word_definition_mapping(self.csv_data_, filtered_list, amount_of_cards,
                                                                   pospeech_)
        time_sapostication_e = perf_counter()
        print(f"sapostication time: {time_sapostication_e - time_sapostication_s} s")

        response_data = []
        test_len = 0
        for word, definition in word_definition_mapping.items():
            test_len += 1
            response_data.append({
                "word": word,
                "explanation": definition
            })
        print(f"len: {test_len}")

        for item in response_data:
            item['explanation'] = item['explanation'].strip('"')
        response_data = {"resId": reqid, 'cards': response_data}
        json_output = json.dumps(response_data, ensure_ascii=False, indent=4)
        self.wfile.write(json_output.encode('utf-8'))

        print("Post resp end")
        e_t = perf_counter()
        print(f"time of post: {e_t - s_t} s")


def run(server_class=http.server.HTTPServer, handler_class=JSONRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()


def main():
    run()


if __name__ == "__main__":
    main()

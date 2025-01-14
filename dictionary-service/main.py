import csv
import http.server
import json
import re
from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
from time import perf_counter
from functools import lru_cache

console_logging = True
csv_file = fr'/Users/olek/Documents/myprojects/lexify/dictionary-service/OPTED-Dictionary.csv'
word_regex = re.compile("^[a-zA-Z]+$")


# pre-initializing the csv directly into a variable will speed up data reading
def csv_initialisation():
    print("initialisation csv data...")

    with open(csv_file, 'r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file, quotechar='~')
        data = list(csv_reader)
    if console_logging:
        print("Successful initialization of csv")
    return data


# TODO: Use enum instead of function
def part_of_speech_convert(part_of_speech: str) -> str:
    if part_of_speech == 'nouns':
        return 'n.'
    elif part_of_speech == 'adjectives':
        return 'a.'
    elif part_of_speech == 'verbs':
        return 'v.'
    elif part_of_speech == 'adverbs':
        return 'adv.'
    else:
        return 'error'


# input csv, words, number of words, and part of speech. output dictionary word:description
@lru_cache(maxsize=1000)
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


# uses compiled regular expressions to speed up the work of determining whether a string is a word
@lru_cache(maxsize=1000)
def is_word(s):
    return word_regex.match(s)


@lru_cache(maxsize=1000)
def parse_web_page(url):
    try:
        req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urlopen(req) as response:
            html = response.read()

        soup = BeautifulSoup(html, 'html.parser')

        page_text = soup.get_text()

        return page_text
    except Exception as e:
        if console_logging:
            print(f"An error occurred: {e}")
        return False, e


def response_check(data_to_check: str) -> bool:
    list_to_check_keys = ['reqId', 'source', 'partOfSpeech', 'amountOfCards']
    list_to_check_part_of_speach = ["nouns", "adjectives", "verbs", "adverbs"]

    try:
        data_to_check = json.loads(data_to_check)
    except Exception as e:
        if console_logging:
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
    """
    #TODO: Describe the class
    """
    csv_data_ = csv_initialisation()

    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_POST(self):
        s_t = perf_counter()
        if console_logging:
            print("Post resp start...")

        if self.path == '/status':
            self.send_response(100)
            self.end_headers()
            self.wfile.write("Status: Ok".encode('utf-8'))
            if console_logging:
                print("Status check")
            return

        # endpoin 1
        elif self.path == '/create_cards_by_link':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)

            decoded_data = post_data.decode('utf-8')

            if not response_check(decoded_data):
                self.send_response(401)
                self.end_headers()
                self.wfile.write("Error 401: Bad Request".encode('utf-8'))
                if console_logging:
                    print("Error: 401")
                return 'error 401'

            self._set_headers()

            json_data = json.loads(decoded_data)

            amount_of_cards = json_data['amountOfCards']
            pospeech_ = part_of_speech_convert(json_data['partOfSpeech'])
            reqid = json_data['reqId']

            time_parse_s = perf_counter()
            page_text = parse_web_page(json_data['source'])
            if isinstance(page_text, tuple):
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f"{page_text[1]}".encode('utf-8'))
                if console_logging:
                    print("Error: 500")
                return
            words = page_text.split()
            time_parse_e = perf_counter()
            if console_logging:
                print(f"parse time: {time_parse_e - time_parse_s} s")

            unique_words = set(words)
            filtered_list = [word.capitalize() for word in unique_words if is_word(word)]

            time_dm_s = perf_counter()
            word_definition_mapping = generate_word_definition_mapping(self.csv_data_, filtered_list, amount_of_cards,
                                                                       pospeech_)
            time_dm_e = perf_counter()
            if console_logging:
                print(f"dm time: {time_dm_e - time_dm_s} s")

            response_data = []
            test_len = 0
            for word, definition in word_definition_mapping.items():
                test_len += 1
                response_data.append({
                    "word": word,
                    "explanation": definition
                })
            if console_logging:
                print(f"len: {test_len}")

            for item in response_data:
                item['explanation'] = item['explanation'].strip('"')
            response_data = {"resId": reqid, 'cards': response_data}
            json_output = json.dumps(response_data, ensure_ascii=False, indent=4)
            self.wfile.write(json_output.encode('utf-8'))
            if console_logging:
                print("Post resp end")
            e_t = perf_counter()
            if console_logging:
                print(f"time of post: {e_t - s_t} s")

        # endpoint 2
        elif self.path == '/create_cards_by_text':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)

            decoded_data = post_data.decode('utf-8')

            if not response_check(decoded_data):
                self.send_response(401)
                self.end_headers()
                self.wfile.write("Error 401: Bad Request".encode('utf-8'))
                if console_logging:
                    print("Error: 401")
                return 'error 401'

            self._set_headers()

            json_data = json.loads(decoded_data)

            amount_of_cards = json_data['amountOfCards']
            pospeech_ = part_of_speech_convert(json_data['partOfSpeech'])
            reqid = json_data['reqId']

            words = json_data['source']
            if not isinstance(words, list):
                self.send_response(401)
                self.end_headers()
                self.wfile.write("Error 401: Bad Request".encode('utf-8'))
                if console_logging:
                    print("Error: 401")
                return 'error 401'

            unique_words = set(words)
            filtered_list = [word.capitalize() for word in unique_words if is_word(word)]

            time_dm_s = perf_counter()
            word_definition_mapping = generate_word_definition_mapping(self.csv_data_, filtered_list, amount_of_cards,
                                                                       pospeech_)
            # definition mapping = dm
            time_dm_e = perf_counter()
            if console_logging:
                print(f"dm time: {time_dm_e - time_dm_s} s")

            response_data = []
            test_len = 0
            for word, definition in word_definition_mapping.items():
                test_len += 1
                response_data.append({
                    "word": word,
                    "explanation": definition
                })
            if console_logging:
                print(f"len: {test_len}")

            for item in response_data:
                item['explanation'] = item['explanation'].strip('"')
            response_data = {"resId": reqid, 'cards': response_data}
            json_output = json.dumps(response_data, ensure_ascii=False, indent=4)
            self.wfile.write(json_output.encode('utf-8'))
            if console_logging:
                print("Post resp end")
            e_t = perf_counter()
            if console_logging:
                print(f"time of post: {e_t - s_t} s")

        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write("Error 404: Not Found".encode('utf-8'))
            if console_logging:
                print("Error: 404")
            return


def run(server_class=http.server.HTTPServer, handler_class=JSONRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    if console_logging:
        print(f'Starting server on port {port}...')
    httpd.serve_forever()


def main():
    run()


if __name__ == "__main__":
    main()

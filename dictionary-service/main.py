import csv
import http.server
import json
import re
from urllib.request import urlopen
from bs4 import BeautifulSoup
from time import perf_counter

csv_file = fr'OPTED-Dictionary.csv'


def csv_initialisation():
    print("initialisation csv data...")
    with open(csv_file, 'r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        data = list(csv_reader)
    print("Successful initialization of csv")
    return data


def generate_word_definition_mapping(csv_data: list, word_list: list) -> dict:
    word_definition_mapping = {}
    for row in csv_data:
        word = row['Word']
        if word in word_list:
            definition = row['Definition']
            word_definition_mapping[word] = definition
    return word_definition_mapping


def is_word(s):
    return re.match("^[a-zA-Z]+$", s)


# def create_response()
def parse_web_page(url):
    try:
        with urlopen(url) as response:
            html = response.read()

        soup = BeautifulSoup(html, 'html.parser')

        page_text = soup.get_text()

        return page_text
    except Exception as e:
        print(f"An error occurred: {e}")
        return None


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
            return

        elif self.path != '/create_cards':
            self.send_response(404)
            self.end_headers()
            self.wfile.write("Error 404: Not Found".encode('utf-8'))
            return

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        self._set_headers()

        json_data = json.loads(post_data.decode('utf-8'))
        time_parse_s = perf_counter()
        page_text = parse_web_page(json_data['resource'])

        words = page_text.split()
        unique_words = set(words)
        filtered_list = [word.capitalize() for word in unique_words if is_word(word)]
        time_parse_e = perf_counter()
        print(f"parse time: {time_parse_e - time_parse_s} s")
        time_sapostication_s = perf_counter()
        word_definition_mapping = generate_word_definition_mapping(self.csv_data_, filtered_list)
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

        json_output = json.dumps(response_data, ensure_ascii=False, indent=4)
        self.wfile.write(json_output.encode('utf-8'))
        print("Post resp end")
        e_t = perf_counter()
        print(f"time: {e_t - s_t} s")


def run(server_class=http.server.HTTPServer, handler_class=JSONRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()


def main():
    run()


if __name__ == "__main__":
    main()

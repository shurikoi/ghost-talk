import csv
import http.server
import json
import re
import time
from urllib.request import urlopen
from bs4 import BeautifulSoup

csv_file = fr'C:\myprojects\lexify\dictionary-service\OPTED-Dictionary.csv'


def generate_word_definition_mapping(csv_file: str, word_list: list) -> dict:
    word_definition_mapping = {}
    with open(csv_file, 'r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            word = row['Word']
            if word in word_list:
                definition = row['Definition']
                word_definition_mapping[word] = definition
    return word_definition_mapping


def is_word(s):
    return re.match("^[a-zA-Z]+$", s)


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
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

    def do_POST(self):
        if self.path != '/create_cards':
            self.send_response(404)
            self.end_headers()
            self.wfile.write("Error 404: Not Found".encode('utf-8'))
            return

        start = time.perf_counter()
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        json_data = json.loads(post_data.decode('utf-8'))

        self._set_headers()
        print("Received JSON:")
        page_text = parse_web_page(json_data['resource'])

        words = page_text.split()
        unique_words = set(words)
        filtered_list = [word for word in unique_words if is_word(word)]
        print(filtered_list)
        print(len(filtered_list))

        word_definition_mapping = generate_word_definition_mapping(csv_file, filtered_list)

        # Создаем список словарей слово-определение
        response_data = []
        for word, definition in word_definition_mapping.items():
            response_data.append({
                "word": word,
                "explanation": definition
            })

        # Преобразуем список в JSON и отправляем его
        json_output = json.dumps(response_data, ensure_ascii=False, indent=4)
        self.wfile.write(json_output.encode('utf-8'))

        end = time.perf_counter()
        print(end - start)


def run(server_class=http.server.HTTPServer, handler_class=JSONRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()


if __name__ == "__main__":
    run()

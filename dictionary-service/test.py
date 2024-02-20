import http.client
import json


def send_json(filename, host='localhost', port=8000):
    with open(filename, 'r') as file:
        json_data = json.load(file)

    headers = {'Content-type': 'application/json'}
    conn = http.client.HTTPConnection(host, port)
    conn.request('POST', '/', json.dumps(json_data), headers)
    response = conn.getresponse()

    print(response.status, response.reason)
    conn.close()


if __name__ == "__main__":
    send_json('test.json')

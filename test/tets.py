import requests
from playsound import playsound
import json
import os
from time import sleep

url = 'https://api.fpt.ai/hmi/tts/v5'

payload = ''

with open("text.txt" , "r" , encoding="utf-8") as f:
    payload = f.read()
    print(f"Hiện tại file có {len(payload)}  Ký tự")
    f.close()

if len(payload ) < 5000 :
    headers = {
        'api-key': 'hNwVz5B9l6M0UbFp4PvRURw1tA39K3r1',
        'speed': '1',
        'voice': 'banmai'
    }

    response = requests.request('POST', url, data=payload.encode('utf-8'), headers=headers)

    a = json.loads(response.text)

    # print(a)
    print(a['async'])
    doc = requests.get(a['async'])

    with open('myfile.mp3', 'wb') as f:
        f.write(doc.content)
        f.close()

    sleep(3)

    # playsound('myfile.mp3')
    # os.remove('myfile.mp3')
    os.system("myfile.mp3")
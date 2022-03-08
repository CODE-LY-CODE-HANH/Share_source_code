# import requests
# from playsound import playsound
# import json
# import os
# from time import sleep
#
# url = 'https://api.fpt.ai/hmi/tts/v5'
#
# payload = ''
#
# with open("text.txt" , "r" , encoding="utf-8") as f:
#     payload = f.read()
#     print(f"Hiện tại file có {len(payload)}  Ký tự")
#     f.close()
#
# if len(payload ) < 5000 :
#     headers = {
#         'api-key': 'hNwVz5B9l6M0UbFp4PvRURw1tA39K3r1',
#         'speed': '1',
#         'voice': 'banmai'
#     }
#
#     response = requests.request('POST', url, data=payload.encode('utf-8'), headers=headers)
#
#     a = json.loads(response.text)
#
#     # print(a)
#     print(a['async'])
#     doc = requests.get(a['async'])
#
#     with open('myfile.mp3', 'wb') as f:
#         f.write(doc.content)
#         f.close()
#
#     sleep(3)
#
#     # playsound('myfile.mp3')
#     # os.remove('myfile.mp3')
#     os.system("myfile.mp3")

import speech_recognition
import pyttsx3
import datetime



robot_ear = speech_recognition.Recognizer()
robot_mouth = pyttsx3.init()
robot_brain = ""

while True:  # cái này để mình và robot giao tiếp liên tục thay vì nói 1 câu chương trình đã kết thúc.
    with speech_recognition.Microphone() as mic:
        print("Robot: I'm Listening")
        audio = robot_ear.record(mic , duration=5)
    try:
        you = robot_ear.recognize_google(audio)
        you = str(you).lower()
    except Exception as ex :
        print(ex)
        you = "lỗi"

    if you == "lỗi":
        robot_brain = "I thank you "
    elif "hello" in you:  # in you này thay vì chúng ta nói Hello sẽ trả ra
        # "Hello python thì nó sẽ kiểm tra là trong câu mà bạn nói có từ Hello hay không ?
        robot_brain: "Hello Python"
    elif "today" in you:
        today = datetime.date.today()
        robot_brain = today.strftime("%B %d, %Y")
    elif "time" in you:
        now = datetime.today()
        robot_brain = now.strftime("%H hours %M minutes %S seconds")
    elif "goodbye" in you:  ## đoạn này khi nói goodbye thì chương trình sẽ tắt thay vì mở liên tục khi ở phía trên
        robot_brain = "Good Bye"
        break
    else:
        robot_brain = "I'm fine thank you and you"

    print("Robot: " + robot_brain)
    robot_mouth.say(robot_brain)
    robot_mouth.runAndWait()

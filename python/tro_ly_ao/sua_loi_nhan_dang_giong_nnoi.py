import playsound
import speech_recognition as sr
import os
from gtts import gTTS
import pyttsx3

# chuyển văn bản thành âm thanh
def speak(text):
    print("Trợ Lý ảo:  ", text)

    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    rate = engine.getProperty('rate')
    volume = engine.getProperty('volume')
    engine.setProperty('volume', volume - 0.0)  # tu 0.0 -> 1.0
    engine.setProperty('rate', rate - 50)
    engine.setProperty('voice', voices[1].id)
    engine.say(text)
    engine.runAndWait()

    # tts = gTTS(text=text, lang="vi", slow=False)
    # tts.save("sound.mp3")
    # playsound.playsound("sound.mp3", True)
    # os.remove("sound.mp3")


# chuyển giọng nói thành văn bản
def get_audio():
    ear_robot = sr.Recognizer()
    with sr.Microphone() as source:
        print("Trợ Lý Ảo:  Đang nghe ! -- __ -- !")

        # python 3.7
        # ear_robot.language = "vi-VN"

        # ear_robot.pause_threshold = 4
        # audio = ear_robot.record(source , duration= 4)
        audio = ear_robot.listen(source)

        try:
            print(("Trợ Lý Ảo :  ...  "))

            # python 3.10
            text = ear_robot.recognize_google(audio, language="vi-VN")

            # python 3.7
            # text = ear_robot.recognize(audio)

            print("Tôi:  ", text)
            return text
        except Exception as ex:
            speak("! ... ! Lỗi Rồi ! ... !")
            print(ex)
            return 0

get_audio()
# speak("Xin chào mọi người nha")
from gtts import gTTS
import time

text = ""

with open("text.txt" , "r+" , encoding="utf-8") as file:
    text += file.read()
    file.close()

print(text)
print(f"\nĐộ dài của chuỗi ký tự là : {len(text)}\n")
tts = gTTS(text=text, lang="vi", slow=False)
tts.save(f"sound{int(time.time())}.mp3")
print("ok "*60)
time.sleep(1)
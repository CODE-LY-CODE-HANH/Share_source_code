#
# image_url = "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/p720x720/267060815_1369054506865737_5614477860105354991_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b9115d&_nc_ohc=yHQaKqX6UjUAX9fzY06&_nc_ht=scontent-sin6-1.xx&oh=00_AT_iVcZnSmxIRp9rCcLAFBEfktgRm38wYe20I2jDwv7TdQ&oe=61CDE70B"
#
#
# def download_Image(url = ""):
#     import urllib.request
#     import os
#
#     urllib.request.urlretrieve(image_url, os.getcwd() + r"\local_filename.png")

from time import sleep
import os
from selenium import webdriver
from bs4 import BeautifulSoup
import requests
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from webdriver_manager.chrome import ChromeDriverManager

# chrome_options = webdriver.ChromeOptions()
# prefs = {
#     "profile.managed_default_content_settings.images": 2
# }
# chrome_options.add_experimental_option("prefs", prefs)

driver = webdriver.Chrome('./chromedriver')
# driver = webdriver.Chrome('./chromedriver', options=chrome_options)
# driver = webdriver.Chrome(executable_path=ChromeDriverManager().install(), options=chrome_options)

# url = "https://www.facebook.com/photo/?fbid=420114489796073&set=pcb.1112042059555521"
# url = "https://www.facebook.com/groups/j2team.community/media"
url = "https://www.thegioididong.com/tin-tuc"

driver.get(url)
# sleep(5)

# print(driver.execute_script("document.querySelectorAll('img[class=\"k4urcfbm bixrwtb6 datstx6m q9uorilb\"]')[1].click()"))
# sleep(1)

# a = driver.find_elements_by_css_selector('''i[class="hu5pjgll lzf7d6o1"]''')
# print(len(a))
# a[5].click()
# sleep(3)

# for i in range(2):
#     driver.execute_script('''document.querySelector("#mount_0_0_jm > div > div:nth-child(1) > div > div:nth-child(7) > div > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div.j83agx80.cbu4d94t.h3gjbzrl.l9j0dhe7.du4w35lb.qsy8amke > div:nth-child(2) > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr.g5gj957u.nznu9b0o.q4kn84j7 > div > div.j83agx80.cbu4d94t.buofh1pr.datstx6m.p01isnhg.l9j0dhe7.iqfcb0g7.tqsryivl > div > div.kr520xx4.j9ispegn.pmk7jnqg.i1fnvgqd.n7fi1qx3.j83agx80.i09qtzwb.bp9cbjyn > div:nth-child(3) > div > div > div").click()''')
#     sleep(2)

# for i in range(10):
#     driver.execute_script("window.scrollTo(0, document.body.scrollHeight + 10000)")
#     sleep(1)


sum = 0

html = driver.page_source

# html = requests.get(url).text

soup = BeautifulSoup(html, 'html.parser')
# dem = 0
# for link in soup.find_all('img'):
#     url = link.get('src')
#
#     if dem > 10:
#         if "h" in url[0]:
#             if "emoji" not in url:
#                 print(url)
#                 sum += 1
#
#     dem += 1
#
#
# # print(soup)
# print(f'sum :  {sum}')
# print(soup)

for i in soup.find_all("h3"):
    class_H3 = i.get('class')

    if (i.get("class")) != None:
        if class_H3[0] == "titlecom":

            # print(i.parent)
            print(i.contents[0].strip())
# for i in soup.find_all("img"):
#
#     if (i.get("class")) != None:
#         if (i.get("class"))[0] == "lazyloaded":
#             print(i.get('src'))

# sleep(1000)
driver.quit()

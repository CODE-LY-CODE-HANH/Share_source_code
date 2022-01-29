# pip freeze > requirements.txt export library to file txt
# https://www.youtube.com/watch?v=rfdNIOYGYVI
import json

from flask import Flask, render_template, request

app = Flask(__name__)


@app.post('/')
def home():
    return request.form.get("name")


@app.route("/salvador")
def salvador():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0" , debug=True)
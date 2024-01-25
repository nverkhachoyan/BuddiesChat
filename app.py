from flask import Flask 
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def index():
    return f"Helloy"

@app.route("/<name>")
def hello_world(name):
    return f"<p>Hello, {escape(name)}!</p>"
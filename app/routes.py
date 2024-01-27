from flask import Blueprint, render_template, request, jsonify
from flask_socketio import emit
from app import socketio

bp = Blueprint('main', __name__)

messages = []

@bp.route('/')
def index():
    return render_template('index.html')

@socketio.on("message")
def handle_message(data):
    print(data)
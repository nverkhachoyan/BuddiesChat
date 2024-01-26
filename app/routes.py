from flask import Blueprint, render_template, request, jsonify
from flask_socketio import emit
from app import socketio

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

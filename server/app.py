from flask import Flask, request
from g4f.client import Client
from translator import get_llm_response
from flask_caching import Cache
from flask_cors import CORS
from emodetect import *


app = Flask(__name__)
CORS(app)

llm_client = Client()

cache = Cache(app, config={
    'CACHE_TYPE': 'FileSystemCache',
    'CACHE_DIR': 'cache',
    'CACHE_THRESHOLD': 500
    })

@app.route("/")
def home():
    return "Hello World"

@app.route("/health")
def health_check():
    return 'API is running'

def to_english(lang, text):
    if lang!="english":
        eng_text =get_llm_response(llm_client, text, lang.capitalize(), "English")
    else:
        eng_text = text
    return eng_text
    
@app.route("/translate/<source>/to/<target>", methods=['POST'])
# @cache.cached(timeout=3000)
def translate(source, target):
    text = request.data.decode('utf-8')
    response = get_llm_response(llm_client, text, source.capitalize(), target.capitalize())
    eng_source = to_english(source, text)
    eng_target = to_english(target, response)
    original_emotions = get_emotion(eng_source)
    translated_emotions = get_emotion(eng_target)
    score = is_similar(original_emotions, translated_emotions)
    attempts = 0
    while score < 0.70:
        response = get_llm_response(llm_client, text, source.capitalize(), target.capitalize())
        eng_source = to_english(source, text)
        eng_target = to_english(target, response)
        original_emotions = get_emotion(eng_source)
        translated_emotions = get_emotion(eng_target)
        score = is_similar(original_emotions, translated_emotions)
        attempts += 1
    return {"response":response, "score":score, "attempts":attempts}

@app.route("/detect-emotions/<source>", methods=['POST'])
# @cache.cached(timeout=3000)
def detect_emotions(source):
    text = request.data.decode('utf-8')
    text = to_english(source, text)
    emotions = get_emotion(text)
    return emotions
from flask import Flask, request
from g4f.client import Client
from translator import get_llm_response
from flask_caching import Cache
import re

app = Flask(__name__)

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

@app.route("/translate/<source>/to/<target>", methods=['POST'])
def translate(source, target):
    text = request.data.decode('utf-8')
    result = get_llm_response(llm_client, source, target, text)
    result = re.sub(r'[#%&$^*`]+', '', result)
    result.replace('Translated text: ', '')
    result.replace(text, '')
    return result

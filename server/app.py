from flask import Flask, request
from g4f.client import Client
from translator import get_llm_response
from flask_caching import Cache
from flask_cors import CORS
import re

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

@app.route("/translate/<source>/to/<target>", methods=['POST'])
@cache.cached(timeout=3000, query_string=True)
def translate(source, target):
    text = request.data.decode('utf-8')
    result = get_llm_response(llm_client, text, source.capitalize(), target.capitalize())
    result = result.split("\n")
    final = ""
    for line in result:
        if line.startswith("#") or "translated" in line.lower()  or "translation" in line.lower()  or "translates" in line.lower() or line == "" or target in line.lower() or source in line.lower():
            pass
        else:
            final = final + line.replace("*", "") + "\n"
    
    return final

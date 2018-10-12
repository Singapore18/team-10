
from flask import Flask, session, request
from pymongo import MongoClient



client = MongoClient()
mongo = client.python_web

app = Flask(__name__)
app.config['SECRET_KEY'] = '123456'

import minds_backend.routes.Form
import minds_backend.routes.Offer
import minds_backend.routes.Job

#import minds_backend.routes.Article
#from minds_backend.routes.User import is_logged_in
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    if request.method == 'OPTIONS':
        response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
        headers = request.headers.get('Access-Control-Request-Headers')
        if headers:
            response.headers['Access-Control-Allow-Headers'] = headers
    return response

app.after_request(add_cors_headers)

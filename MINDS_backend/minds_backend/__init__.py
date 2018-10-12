
from flask import Flask, session
from pymongo import MongoClient


client = MongoClient()
mongo = client.python_web

app = Flask(__name__)
app.config['SECRET_KEY'] = '123456'

import minds_backend.routes.Form
import minds_backend.routes.Offer
#import minds_backend.routes.Article
#from minds_backend.routes.User import is_logged_in

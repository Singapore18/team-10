from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util
from bson.objectid import ObjectId


@app.route('/coach', methods=['POST'])
def store_new_coach():

    datas = [{
            'Name': 'John Morgan',
            'email_address': 'nathanaelraj@gmail.com',
            }]


    for data in datas:
        print(data)
        mongo.coaches.insert_one(data)

    return "Saved"

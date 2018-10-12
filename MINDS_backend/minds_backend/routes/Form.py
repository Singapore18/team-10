from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util


@app.route('/form', methods=['POST'])
def store_new_form():
    data = request.get_json()

    mongo.forms.insert_one({
        'NRIC': data['NRIC'],
        'first_name': data['first_name'],
        'full_name': data['full_name'],
        'coach': data['coach'],
        'date': data['date'],
        'personal_interests': data['personal_interests'],
        'work_strengths': data['work_strengths'],
        'work_experience': data['work_experience'],
        'skills': data['skills'],
        'support': data['support'],
        'interested_industries': data['interested_industries'],
        'request_location': data['request_location'],
        'request_area': data['request_area'],
        'request_time': data['request_time'],
        'request_duration': data['request_duration'],
        'request_dow': data['request_dow'],
        'quote': data['quote'],
        'status': 'pending' # pending, approved, employed
    })

    result = list(mongo.forms.find())
    result = json.dumps(result, default=json_util.default)
    return jsonify(result)

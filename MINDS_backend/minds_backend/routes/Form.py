from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util
from bson.objectid import ObjectId
from datetime import datetime
from minds_backend.routes import InformEmployer


@app.route('/form', methods=['POST'])
def store_new_form():
    data = request.get_json()

    mongo.forms.insert_one({
        'NRIC': data['NRIC'],
        #'first_name': data['first_name'],
        'full_name': data['full_name'],
        'coach': data['coach'],
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
        #'quote': data['quote'],
        'date': datetime.now().strftime('%Y-%m-%d %H:%M'),
        'status': 'pending', # pending, approved, employed
        'job_offers': [],
        'matched_employer': ''
    })

    return jsonify({'message' : 'success'})


@app.route('/coach/edit_form/<string:id>', methods = ['GET','POST'])
def update_form(id):

    if request.method == 'POST':
        data = request.get_json()
        mongo.forms.update({'_id':ObjectId(id)}, {"$set": {
            'NRIC': data['NRIC'],
            #'first_name': data['first_name'],
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
            #'quote': data['quote']
        }}, upsert=False)
        return jsonify({'message' : 'success'})
    else:
        form = mongo.forms.find_one({'_id': ObjectId(id)})
        print(form)
        if form is not None:
            form = json.dumps(form, default=json_util.default)
            return form
        else:
            return jsonify({'message':'this id cannot find'})


@app.route('/coach/<string:id>', methods = ['GET'])
def approve_form(id):
    try:
        mongo.forms.update({'_id':ObjectId(id)}, {"$set": {'status': 'approved'}}, upsert=False)
        InformEmployer.inform(id)
        return jsonify('success')
    except:
        return jsonify('failed')


@app.route('/all', methods=['GET'])
def get_all_forms():
    result = list(mongo.forms.find())
    result = json.dumps(result, default=json_util.default)
    return result


@app.route('/home', methods=['GET'])
def get_all_approved_forms():
    result = list(mongo.forms.find({'status':'approved'}))
    result = json.dumps(result, default=json_util.default)
    return result


"""@app.route('/home/food', methods = ['POST'])
def get_required_approved_forms():
    criteria = request.get_json()
    skill_keyword = criteria['skills']
    
    
    result = list(mongo.forms.find({'status':'approved'}))"""


@app.route('/home/<string:id>', methods=['GET'])
def get_one_approved_form(id):
    form = mongo.forms.find_one({'_id': ObjectId(id)})
    if form is not None:
        form = json.dumps(form, default=json_util.default)
        return form
    else:
        return jsonify('this id cannot find')


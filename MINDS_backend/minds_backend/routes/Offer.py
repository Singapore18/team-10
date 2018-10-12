from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util


@app.route('/offer', methods=['POST'])
def store_new_offer():
    data = request.get_json()

    mongo.offers.insert_one({
        'employee_id': data['employee_id'],
        'date': data['date'],
        'company_name': data['company_name'],
        'work_location': data['work_location'],
        'job_title': data['job_title'],
        'job_description': data['job_description'],
        'contact_person': data['contact_person'],
        'contact_number': data['contact_number'],
        'email_address': data['email_address'],
        'remarks': data['remarks'],

        'status': 'offered', #offered, accepted,
    })

    offer_id = list(mongo.offers.find())[-1]['_id']
    employee_id = list(mongo.offers.find())[-1]['employee_id']
    employee = mongo.forms.find_one({'id': ObjectId(employee_id)})
    employee_list = []
    for document in employee:
        employee_list.append({})
        for field in document.keys():
            employee_list[-1][field] = document[field]

    employee = employee_list[0]
    offers_current = employee_list['job_offers']
    print(offers_current)
    mongo.forms.update({'_id':ObjectId(employee_id)}, {"$set": {'job_offers': ''}}, upsert=False)

    mongo.forms.find({'id': employee_id})

    return "Saved"


@app.route('/offer', methods=['GET'])
def get_all_offers():

    form_list = []
    collection_list = mongo.offers.find()

    for document in collection_list:
        form_list.append({})
        for field in document.keys():
            form_list[-1][field] = document[field]
    # print(form_list)
    return "OK"

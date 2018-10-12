from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util
from bson.objectid import ObjectId


@app.route('/job', methods=['POST'])
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

    employee = mongo.forms.find_one({'_id': ObjectId(data['employee_id'])})

    job_offers_current = employee['job_offers']
    job_offers_current.append(offer_id)
    mongo.forms.update({'_id':ObjectId(employee['_id'])}, {"$set": {'job_offers': job_offers_current}}, upsert=False)

    return "Saved"

from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util
from bson.objectid import ObjectId


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

    employee = mongo.forms.find_one({'_id': ObjectId(data['employee_id'])})

    job_offers_current = employee['job_offers']
    job_offers_current.append(offer_id)
    mongo.forms.update({'_id':ObjectId(employee['_id'])}, {"$set": {'job_offers': job_offers_current}}, upsert=False)

    return "Saved"


@app.route('/get_offer', methods=['POST'])
def get_offers():

    data = request.get_json()

    employee = mongo.forms.find_one({'_id': ObjectId(data['employee_id'])})
    offers = []
    job_offers = employee['job_offers']
    for offer_id in job_offers:
        offer_dict = mongo.offers.find_one({'_id': ObjectId(offer_id)})
        offers.append(offer_dict)

    offers = json.dumps(offers, default=json_util.default)

    return jsonify(offers)



# {
# "employee_id": "5bc02fb8894fef749706be94",
# "date": "data",
# "company_name": "data",
# "work_location": "data",
# "job_title": "data",
# "job_description": "data",
# "contact_person": "data",
# "contact_number": "data",
# "email_address": "data",
# "remarks": "data"
# }
#
from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util
from bson.objectid import ObjectId


@app.route('/job', methods=['POST'])
def store_new_job():

    datas = [{
            'date': '20181001',
            'company_name': 'Uniqlo',
            'work_location': 'Jurong East',
            'job_title': 'Retail Assistant',
            'job_description': 'Unpack clothes from boxes, fold, sort & hang clothes. Prefer physically fit males.',
            'contact_person': 'Masaki Ta',
            'contact_number': '86122242',
            'email_address': 'goto@uniqlo.com',
            'industry': 'F&B'
            },
            {
            'date': '20181001',
            'company_name': 'Subway',
            'work_location': 'Jurong East',
            'job_title': 'Cleaner',
            'job_description': 'Clean floor.',
            'contact_person': 'Ann Tu',
            'contact_number': '86789134',
            'email_address': 'goto@subway.com',
            'industry': 'Cleaning'
            },
            {
            'date': '20181001',
            'company_name': 'Changi Hotel',
            'work_location': 'Changi',
            'job_title': 'Retail Assistant',
            'job_description': 'Clean room.',
            'contact_person': 'Clare Ma',
            'contact_number': '89612344',
            'email_address': 'goto@uniqlo.com',
            'industry': 'Hotel'
            }]


    for data in datas:
        print(data)
        mongo.jobs.insert_one({
            'date': data['date'],
            'company_name': data['company_name'],
            'work_location': data['work_location'],
            'job_title': data['job_title'],
            'job_description': data['job_description'],
            'contact_person': data['contact_person'],
            'contact_number': data['contact_number'],
            'email_address': data['email_address'],

            'status': 'open', #closed
        })

    return "Saved"

from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps
import json
from bson import json_util
from bson.objectid import ObjectId
import smtplib

def inform(id):
    gmailaddress = "noreply.mindsjobs@gmail.com"
    gmailpassword = "cfgminds"
    #get the employee information
    employee = mongo.forms.find_one({'_id': id})
    nameOfEmployee = employee['full_name']
    experience = employee['work_experience']
    msg = 'Dear Employer,\nThe following Minds Client, ' + nameOfEmployee + ', has registered in our database and has the following work experience, ' + ''.join(experience)
    alljobs = list(mongo.jobs.find())
    for employer in alljobs:
        sendTo = employer['email_address']

        mailServer = smtplib.SMTP('smtp.gmail.com' , 587)
        mailServer.starttls()
        mailServer.login(gmailaddress , gmailpassword)
        mailServer.sendmail(gmailaddress, sendTo , msg)
        mailServer.quit()

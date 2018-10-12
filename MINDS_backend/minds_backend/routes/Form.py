from minds_backend import app, mongo
from flask import session, request, jsonify
from functools import wraps


@app.route('/form.html', methods=['POST'])
def store_new_form():
    data = request.get_json()
    result = 0
    return jsonify(result)
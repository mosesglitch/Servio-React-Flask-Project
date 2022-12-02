import os
from flask import Flask, request, jsonify, abort, redirect
from sqlalchemy import exc
import json
from flask_cors import CORS
import ast
from database.models import db_drop_and_create_all, setup_db, Service_info
# from .auth.auth import AuthError, requires_auth

app = Flask(__name__)
with app.app_context(): 
    setup_db(app)
    # db_drop_and_create_all()

# setup_db(app)




@app.route('/profile',methods = ["GET"])
def get_time():
    try:
        serves = Service_info.query.order_by(Service_info.id).all()
       
        return jsonify({"success": True,"service": [serve.long() for serve in serves]})
    except:
        abort(422)
    # data={
    #     'Name':["geek","guru",'gant'],
    #     "Age":["22",'45','34'],
    #     "programming":["python",'c','js']}
    # return jsonify(data=data)
        
@app.route('/addprofile',methods=['POST'])
# @requires_auth('post:drinks')
def add_profile():
    try:
        body = request.get_json()
        name = body.get("name",None)
        location = body.get("location",None)
        about = body.get("about",None)
        skill = body.get("skill",None)
        availability = body.get("availability",None)
        newprofile  =  Service_info(
        name = name,
        location=location,
        about=about,
        skill=skill,
        availability=availability
        # recipe = json.dumps(recipe)
        )
        newprofile.insert()
        print(name, availability,skill)
        first = Service_info.query.first()
        print(first)
        return jsonify({"success": True}),200
    except:
        abort(422) 
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)
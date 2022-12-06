import os
from flask import Flask, request, jsonify, abort, redirect, flash, session
from sqlalchemy import exc
import json
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import ast
from database.models import db_drop_and_create_all, setup_db, Service_info
# from .auth.auth import AuthError, requires_auth
import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

app = Flask(__name__)
with app.app_context(): 
    setup_db(app)
    db_drop_and_create_all()

# setup_db(app)
CORS(app)

UPLOAD_FOLDER = os.getcwd()
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

@app.route('/profile',methods = ["GET"])
def get_time():
    # try:
    serves = Service_info.query.order_by(Service_info.id).all()
    print(serves)
    return jsonify({"success": True,"service": [serve.long() for serve in serves]})
    # except:
    #     abort(422)
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
        image_link=body.get("image_link",None)
        email=body.get("email",None)
        phone=body.get("phone",None)
        facebook=body.get("facebook",None)
        twitter=body.get("twitter",None)

        newprofile  =  Service_info(
        name = name,
        location=location,
        about=about,
        skill=skill,
        availability=availability,
        image_link=image_link,
        email=email,
        phone=phone,
        facebook=facebook,
        twitter=twitter
        # recipe = json.dumps(recipe)
        )
        newprofile.insert()
        first = Service_info.query.first()
        print(twitter,facebook)
        return jsonify({"success": True}),200
    except Exception as e:
        print(e)
        abort(422) 

@app.route('/uploadimage',methods=['PATCH'])
# @requires_auth('post:drinks')
def upload_image():
    # try:
    target=os.path.join(UPLOAD_FOLDER,'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    userid=request.form["user_id"]
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)
    # session['uploadFilePath']=destination
    # filesys=file.read()
    updprofile = Service_info.query.filter_by(id=userid).first()
    updprofile.image_link = destination
    updprofile.update()
    response="Whatever you wish too return"
    return jsonify(response)
    
        # return jsonify({"success": True}),200
    # except Exception as e:
    #     print(e)
    #     abort(422) 
# Running app
if __name__ == '__main__':
    app.run(debug=True)

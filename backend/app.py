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
    db_drop_and_create_all()

# setup_db(app)




@app.route('/profile',methods = ["GET"])
def get_time():
    try:
        serves = Service_info.query.order_by(Service_info.id).all()
        print(serves)
        return jsonify({"success": True,"service": [serve.long() for serve in serves]})
    except:
        abort(422)
    # data={
    #     'Name':["geek","guru",'gant'],
    #     "Age":["22",'45','34'],
    #     "programming":["python",'c','js']}
    # return jsonify(data=data)
        
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)
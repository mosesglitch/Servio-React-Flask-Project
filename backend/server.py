# Import flask and datetime module for showing date and time
from flask import Flask,jsonify,request
import datetime
  
x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__)
  
  
# Route for seeing a data



@app.route('/profile',methods = ["GET"])
def get_time():
    data={
        'Name':["geek","guru",'gant'],
        "Age":["22",'45','34'],
        "programming":["python",'c','js']}
    return jsonify(data=data)
        
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)
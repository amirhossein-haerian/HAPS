#Install Libraries
import os
import sys
from flask import Flask, request, jsonify
import joblib
import traceback
import pandas as pd
import numpy as np

from flask_cors import CORS, cross_origin

if __name__ == "__main__":
 try:
    port = int(sys.argv[1])
 except:
    port = 3001

dirname = os.path.abspath('')

# Loading our models
encoderModel = joblib.load(os.path.join(dirname, "Back-End/models/encoderModel.pkl")) 
print ("enodelModel loaded")
scalerModel = joblib.load(os.path.join(dirname, "Back-End/models/scalerModel.pkl")) 
print ("scalerModel loaded")
X_columns = joblib.load(os.path.join(dirname, "Back-End/models/X_columns.pkl")) 
print ("X_columns loaded")
KNN = joblib.load(os.path.join(dirname, "Back-End/models/KNN.pkl")) 
print ("KNN loaded")

application = Flask(__name__)
application.config['SECRET_KEY'] = 'secret key'
application.config['CORS_HEADERS'] = 'Content-Type'

@application.route("/predict", methods=["POST"]) # defining a path
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])

def predict():
    try:
        # Converting our data into DataFrame
        req_data = request.json
        req_df = pd.DataFrame.from_dict(req_data, orient="columns")

        num_col = req_df.describe().columns

        # encoding the categorical data into numerical data
        for c in list(encoderModel.keys()):    
            req_df[c] = encoderModel[c].transform(req_df[c])

        print(req_df)

        # standardize our data
        mock_data_df_numeric = req_df[num_col]
        mock_data_df_numeric_st = scalerModel.transform(mock_data_df_numeric)
        req_df[num_col] = mock_data_df_numeric_st

        # predict the value
        predicted_value = KNN.predict(req_df)
        return jsonify({"prediction": str(predicted_value[0])})
    except:
        return jsonify({"trace": traceback.format_exc()})

application.run(port=port)
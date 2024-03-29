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
one_hot_encoder_model = joblib.load(os.path.join(dirname, "Back-End/models/one_hot_encoder_model.pkl")) 
print ("one_hot_encoder_model loaded")
scalerModel = joblib.load(os.path.join(dirname, "Back-End/models/scalerModel.pkl")) 
print ("scalerModel loaded")
cat_columns = joblib.load(os.path.join(dirname, "Back-End/models/cat_columns.pkl")) 
print ("X_columns loaded")
RF = joblib.load(os.path.join(dirname, "Back-End/models/RF.pkl")) 
print ("RF loaded")

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

        transformed_one_hot_encoder_model = one_hot_encoder_model.transform(req_df[cat_columns])
        one_hot_encoder_df = pd.DataFrame(transformed_one_hot_encoder_model, columns = one_hot_encoder_model.get_feature_names(input_features = cat_columns))
        req_df = pd.concat([one_hot_encoder_df, req_df], axis=1).drop(columns = cat_columns, axis=1)


        # standardize our data
        mock_data_df_numeric = req_df[num_col]
        mock_data_df_numeric_st = scalerModel.transform(mock_data_df_numeric)
        req_df[num_col] = mock_data_df_numeric_st

        # predict the value
        predicted_value = RF.predict(req_df)
        return jsonify({"prediction": str(predicted_value[0])})
    except:
        return jsonify({"trace": traceback.format_exc()})

application.run(port=port)
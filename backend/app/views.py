import pickle
from tensorflow import keras
import numpy as np
from app import app
from flask import request
from flask import send_file
import cv2

@app.route("/diabetes",methods = ['POST'])
def diabetes():
    model = pickle.load(open('models/diabetes_svm_model.pkl', 'rb'))
    request_data = request.get_json();
    test_data = []
    for i in request_data.values():
        test_data.append(i)
    prediction = model.predict([test_data])
    return str(prediction)

@app.route("/hepatitis",methods = ['POST'])
def hepatits():
    model = pickle.load(open('models/hepatitis_dt_model.pkl', 'rb'))
    request_data = request.get_json();
    test_data = []
    for i in request_data.values():
        test_data.append(i)
    prediction = model.predict([test_data])
    return str(prediction)

@app.route("/ckd",methods = ['POST'])
def ckd():
    model = pickle.load(open('models/ckd_dt_model.pkl', 'rb'))
    request_data = request.get_json();
    test_data = []
    for i in request_data.values():
        test_data.append(i)
    prediction = model.predict([test_data])
    return str(prediction)

@app.route("/tuberculosis",methods = ['POST'])
def tuberculosis():
    request_data = request.files['file']
    request_data.save("tuberculosis.png")
    model = keras.models.load_model("models/tuberculosis model")
    return str("tuberculosis")


@app.route("/retinopathy",methods = ['POST'])
def retinopathy():
    request_data = request.files['file']
    request_data.save("retinopathy.png")
    model = keras.models.load_model("models/left retina model")
    x = retinopathy_img_processing()
    prediction = model.predict(x)
    print(prediction)
    return str("retinopathy")


def retinopathy_img_processing():
    img = cv2.imread("retinopathy.png")
    img_size = 256

    img = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    height, width, depth = img.shape
    x = int(width / 2)
    y = int(height / 2)
    r = np.amin((x, y))

    circle_img = np.zeros((height, width), np.uint8)
    cv2.circle(circle_img, (x, y), int(r), 1, thickness=-1)

    img = cv2.bitwise_and(img, img, mask=circle_img)
    img = cv2.addWeighted(img, 4, cv2.GaussianBlur(img, (0, 0), 45), -4, 128)
    img = cv2.resize(img, (img_size, img_size))

    x = np.array([img])
    return x

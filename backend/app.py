from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import json

# Initialize app
app = Flask(__name__)
CORS(app)

# Load model
model = load_model('best_model.h5')

# Load class mapping (index -> label)
with open('class_mapping.json', 'r') as f:
    idx2class = json.load(f)

# Image size used in training
IMG_SIZE = (224, 224)


from io import BytesIO

def preprocess_image(img_file):
    img_bytes = img_file.read()  # Read image as bytes
    img = image.load_img(BytesIO(img_bytes), target_size=IMG_SIZE)  # Wrap with BytesIO
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array



@app.route('/predict', methods=['POST'])
def predict():
    print("🟢 /predict endpoint hit")

    if 'image' not in request.files:
        print("🔴 Error: 'image' key not in request.files")
        return jsonify({'error': 'No image uploaded'}), 400

    img_file = request.files['image']
    print("📷 Received image:", img_file.filename)

    try:
        img_array = preprocess_image(img_file)
        print("✅ Image preprocessed. Shape:", img_array.shape)

        preds = model.predict(img_array)
        print("✅ Model prediction completed. Raw preds:", preds)

        class_idx = int(np.argmax(preds[0]))
        print("✅ Predicted class index:", class_idx)

        predicted_class = idx2class.get(str(class_idx), "Unknown")
        print("✅ Mapped to class:", predicted_class)

        return jsonify({'predicted_item': predicted_class})

    except Exception as e:
        print("❌ Exception occurred during prediction:", str(e))
        return jsonify({'error': str(e)}), 500




# Run the app
if __name__ == '__main__':
    app.run(debug=True)

from fastapi import APIRouter, UploadFile, File
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from PIL import Image
import io

router = APIRouter()

# Load the AI model (TensorFlow .h5 format)
model = load_model("model/fingerprint_model.h5")

# Define image preprocessing function
def preprocess_image(img):
    img = img.convert("L")  # Convert to grayscale
    img = img.resize((128, 128))  # Resize image to match model input
    img_array = np.array(img) / 255.0  # Normalize pixel values (0-1)
    img_array = img_array.reshape(1, 128, 128, 1)  # Reshape for CNN input
    return img_array

@router.post("/predict/")
async def predict_fingerprint(file: UploadFile = File(...)):
    try:
        # Read and preprocess the image
        image_data = Image.open(io.BytesIO(await file.read()))
        processed_image = preprocess_image(image_data)

        # Get prediction (assuming model outputs a probability)
        prediction = model.predict(processed_image)[0][0]

        return {"real_fingerprint_probability": float(prediction)}

    except Exception as e:
        return {"error": str(e)}

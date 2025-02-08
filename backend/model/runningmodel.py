import cv2
import numpy as np
import joblib
from skimage.filters import gabor
from skimage.feature import local_binary_pattern

# Load trained model
model_path = "C:\\Users\\lenovo\\Documents\\SOCOFing\\pmneww.pkl"

def preprocess_fingerprint(image_path):
    """Preprocess fingerprint (grayscale, normalization, enhancement)"""
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        print("⚠️ Error: Image not found!")
        return None
    img = cv2.resize(img, (256, 256))
    img = cv2.equalizeHist(img)  # Histogram equalization for better contrast
    return img

def extract_features(image):
    """Extract features using Gabor filters, LBP, and statistical descriptors"""
    gabor_kernels = [(8, 0.5), (16, 0.8), (32, 1.0)]
    gabor_features = []
    
    for wavelength, sigma in gabor_kernels:
        filtered, _ = gabor(image, frequency=1.0/wavelength, sigma_x=sigma, sigma_y=sigma)
        gabor_features.append(np.mean(filtered))
        gabor_features.append(np.std(filtered))
    
    # Local Binary Pattern (LBP)
    lbp = local_binary_pattern(image, P=8, R=1, method="uniform")
    lbp_hist, _ = np.histogram(lbp.ravel(), bins=np.arange(0, 11), density=True)
    
    # Statistical Features
    mean_intensity = np.mean(image)
    std_intensity = np.std(image)
    
    return np.concatenate([gabor_features, lbp_hist, [mean_intensity, std_intensity]])

def predict_fingerprint(image_path):
    """Classify fingerprint as Real or AI-Generated"""
    # Load trained model
    classifier = joblib.load(model_path)
    
    # Preprocess input image
    img = preprocess_fingerprint(image_path)
    if img is None:
        return "Error: Unable to process image."

    # Extract features
    features = extract_features(img).reshape(1, -1)  # Reshape for model input
    
    # Predict class (0=Real, 1=Fake) with probability
    prediction = classifier.predict(features)[0]
    confidence = classifier.predict_proba(features)[0]  # Probability score
    
    # Format confidence score
    confidence_real = confidence[0] * 100
    confidence_fake = confidence[1] * 100
    
    if prediction == 0:
        return f"🟢 Real Fingerprint (Confidence: {confidence_real:.2f}%)"
    else:
        return f"🔴 AI-Generated Fingerprint (Confidence: {confidence_fake:.2f}%)"

# Example Usage
image_to_test = "C:\\Users\\lenovo\\Downloads\\jpg2png\\fbc1e6cf-17c2-41d7-8fc2-db9139536a26.png"
result = predict_fingerprint(image_to_test)
print(result)

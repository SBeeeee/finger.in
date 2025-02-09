from fastapi import FastAPI
from routes import predict  # Ensure 'routes' exists and is accessible
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root Route
@app.get("/")
def home():
    return {"message": "Fingerprint AI Model API is running"}

# Include API Routes
app.include_router(predict.router)

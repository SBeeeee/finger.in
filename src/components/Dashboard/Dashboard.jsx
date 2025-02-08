import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Fingerprint upload and processing state
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Handle file upload change
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      setResult(null);
      processFingerprint(uploadedFile);
    }
  };

  // Simulate fingerprint processing (replace with your actual processing logic)
  const processFingerprint = (file) => {
    setIsProcessing(true);
    // Simulated processing delay (e.g., 3 seconds)
    setTimeout(() => {
      setResult({
        message: "Fingerprint processed successfully!",
        details: "Dummy result: Fingerprint recognized.",
      });
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10 space-y-10">
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          Welcome, {user?.email}
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Fingerprint Upload Section */}
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 w-full p-2 rounded bg-gray-200 text-gray-900"
        />

        {file && (
          <div className="mb-4">
            <p className="text-gray-300">Uploaded File: {file.name}</p>
          </div>
        )}

        {isProcessing && (
          <div className="flex flex-col items-center">
            {/* Spinner Animation */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
            <p className="text-blue-500">Processing Fingerprint...</p>
          </div>
        )}

        {result && (
          <div className="mt-4 p-4 bg-green-600 rounded-lg text-green-100">
            <p className="font-bold">{result.message}</p>
            <p>{result.details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

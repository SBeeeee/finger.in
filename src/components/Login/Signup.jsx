import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import emailjs from "emailjs-com";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  // Generate 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send OTP via Email


  const sendOTP = async () => {
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }
  
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);
  
    const templateParams = {
      user_email: email, 
      otp: otpCode,       
    };
  
    console.log("Sending OTP to:", email);
    console.log("Generated OTP:", otpCode);
  
    try {
      const response = await emailjs.send(
        "service_79zcobf", 
        "template_lpjywta", 
        templateParams,
        "N0KNY6uhpwGMQ_eks" 
      );
  
      console.log("EmailJS Response:", response);
      setOtpSent(true);
      alert("OTP sent to your email.");
    } catch (err) {
      console.error("EmailJS Error:", err);
      if (err.status === 400) {
        setError("EmailJS: Bad request. Check credentials or template.");
      } else {
        setError("Failed to send OTP. Try again.");
      }
    }
  };
  

  // Verify OTP
  const verifyOTP = () => {
    if (otp === generatedOtp) {
      setVerified(true);
      alert("OTP Verified Successfully!");
    } else {
      setError("Invalid OTP. Try again.");
    }
  };

  // Handle User Signup after OTP verification
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!verified) {
      setError("Please verify OTP before signing up.");
      return;
    }

    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center bg-black/90 justify-center p-6 relative">
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-logo text-white mb-6">Create an Account</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-300" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-gray-300" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {!otpSent ? (
            <button
              type="button"
              onClick={sendOTP}
              className="w-full p-3 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
            >
              Send OTP
            </button>
          ) : (
            <>
              <div className="relative flex items-center">
                <FaLock className="absolute left-3 text-gray-300" />
                <input
                  type="text"
                  placeholder="Enter OTP"
                  required
                  className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <button
                type="button"
                onClick={verifyOTP}
                className="w-full p-3 rounded-lg bg-green-500 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
              >
                Verify OTP
              </button>
            </>
          )}

          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-300" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={!verified}
            className={`w-full p-3 rounded-lg ${
              verified ? "bg-orange-500" : "bg-gray-500"
            } text-white font-semibold shadow-md hover:shadow-lg transition duration-300`}
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm mt-3 text-gray-300">
          <span>Already have an account? </span>
          <Link to="/login" className="text-white text-lg font-semibold hover:text-orange-400 hover:underline">Login</Link>
        </div>

        {/* Google Signup Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleGoogleSignup}
            className="p-3 bg-white/10 rounded-full border border-white/20 hover:scale-110 transition hover:bg-orange-500/20"
          >
            <FaGoogle className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

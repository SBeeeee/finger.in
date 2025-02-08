import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle User Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect user after signup
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard"); // Redirect after Google signup
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
            className="w-full p-3 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
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

import { useState } from "react";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebaseConfig";  
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Login with Email/Password
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center bg-black/90 justify-center p-6 relative">
      <div className="relative z-1000 bg-white/20 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-logo text-white mb-6">Login to Your Account</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>

        <div className="flex justify-between text-sm mt-3 text-gray-300">
          <a href="#" className="hover:text-orange-400 transition">Forgot Password?</a>
          <Link to="/signup" className="hover:text-orange-400 transition">Sign Up</Link>
        </div>

        {/* Google Login Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleGoogleLogin}
            className="p-3 bg-white/10 rounded-full border border-white/20 hover:scale-110 transition hover:bg-orange-500/20"
          >
            <FaGoogle className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import GradientBackground from "../welcome/GradientBackground";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="flex min-h-screen items-center bg-black/90 justify-center p-6 relative">
      <GradientBackground />
      
      {/* Signup Card */}
      <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 p-8 rounded-2xl shadow-lg w-full max-w-md text-center transition-transform hover:scale-105">
        <h2 className="text-2xl font-logo text-gray-900 mb-6">Create an Account</h2>
        <form className="flex flex-col gap-4">
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-600" />
            <input type="text" placeholder="Full Name" required className="w-full pl-10 p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-gray-600" />
            <input type="email" placeholder="Email Address" required className="w-full pl-10 p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-600" />
            <input type="password" placeholder="Password" required className="w-full pl-10 p-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <button type="submit" className="w-full p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-orange-500 transition">Sign Up</button>
        </form>
        <div className="text-sm mt-3">
          <span>Already have an account? </span>
          <Link to="/Login" className="text-blue-600 hover:underline">Login</Link>
        </div>
        {/* Social Signup */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="p-3 bg-white/50 rounded-full border border-white/30 hover:scale-110 transition">
            <FaFacebookF className="text-gray-700" />
          </a>
          <a href="#" className="p-3 bg-white/50 rounded-full border border-white/30 hover:scale-110 transition">
            <FaTwitter className="text-gray-700" />
          </a>
          <a href="#" className="p-3 bg-white/50 rounded-full border border-white/30 hover:scale-110 transition">
            <FaGoogle className="text-gray-700" />
          </a>
        </div>
      </div>
    </div>
  );
}

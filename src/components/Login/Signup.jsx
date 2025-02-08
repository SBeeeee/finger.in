import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import GradientBackground from "../welcome/GradientBackground";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex min-h-screen items-center bg-black/90 justify-center p-6 relative">
      <GradientBackground />

      {/* Signup Card */}
      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl shadow-[0_4px_30px_rgba(255,255,255,0.1)] w-full max-w-md text-center transition-transform hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,150,50,0.3)]">
        <h2 className="text-2xl font-logo text-white mb-6">Create an Account</h2>

        <form className="flex flex-col gap-4">
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-300" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 text-gray-300" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-300" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/50 hover:shadow-lg hover:shadow-orange-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="text-sm mt-3 text-gray-300">
          <span>Already have an account? </span>
          <Link to="/Login" className="text-white text-lg font-semibold hover:text-orange-400 hover:underline">Login</Link>
        </div>

        {/* Social Signup */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="p-3 bg-white/10 rounded-full border border-white/20 hover:scale-110 transition hover:bg-orange-500/20">
            <FaFacebookF className="text-white" />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full border border-white/20 hover:scale-110 transition hover:bg-orange-500/20">
            <FaTwitter className="text-white" />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full border border-white/20 hover:scale-110 transition hover:bg-orange-500/20">
            <FaGoogle className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

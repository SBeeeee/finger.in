import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChe3ic36VRE20yzVt5JHomqwjO1kx1LpM",
  authDomain: "login-for-fingerin.firebaseapp.com",
  projectId: "login-for-fingerin",
  storageBucket: "login-for-fingerin.firebasestorage.app",
  messagingSenderId: "1019604813482",
  appId: "1:1019604813482:web:ac559fc978cd07334332d3",
  measurementId: "G-MPR7639QR7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

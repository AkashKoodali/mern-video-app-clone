import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBOcskIlv99x1woRMGcCauheTc3V27iaEM",
  authDomain: "video-yt-lama.firebaseapp.com",
  projectId: "video-yt-lama",
  storageBucket: "video-yt-lama.appspot.com",
  messagingSenderId: "235453468526",
  appId: "1:235453468526:web:490acfd4e84cbdc8bbfb7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export default app;
// Firebase App (the core Firebase SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

// Firebase Authentication
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase Realtime Database
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUfLZ0hiR0uPQOSyrgrhBZnHf-h3UxezE",
  authDomain: "xdevilearning99.firebaseapp.com",
  databaseURL: "https://xdevilearning99-default-rtdb.firebaseio.com",
  projectId: "xdevilearning99",
  storageBucket: "xdevilearning99.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

// Export for other files
export { auth, db, provider };

import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9AFRmFhc-3aIQjrzXiG9dpDXb7lM4R7s",
  authDomain: "ecommerce-38280-a64ca.firebaseapp.com",
  projectId: "ecommerce-38280-a64ca",
  storageBucket: "ecommerce-38280-a64ca.appspot.com",
  messagingSenderId: "155581712134",
  appId: "1:155581712134:web:90bb478a0fb794147a8087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
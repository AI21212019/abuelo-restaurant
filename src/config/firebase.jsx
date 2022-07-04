import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.VITE__API_KEY,
  authDomain: process.env.VITE__AUTH_DOMAIN,
  databaseURL: process.env.VITE__DATABASE_URL,
  projectId: process.env.VITE__PROJECT_ID,
  storageBucket: process.env.VITE__STORAGE_BUCKET,
  messagingSenderId: process.env.VITE__MESSAGING_SENDER_ID
};

// Initialize Firebase
const initializeAuthentication = initializeApp(firebaseConfig);
export default initializeAuthentication;

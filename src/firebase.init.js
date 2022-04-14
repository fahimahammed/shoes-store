import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCsgSSrM8nLTrCkStEzmxt0ZjRu1F89qyM",
  authDomain: "shoes-store1.firebaseapp.com",
  projectId: "shoes-store1",
  storageBucket: "shoes-store1.appspot.com",
  messagingSenderId: "234775837929",
  appId: "1:234775837929:web:9875866eb62e6ba9940478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
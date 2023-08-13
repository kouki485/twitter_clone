import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey:"",
	authDomain: "twitter-clone-1c774.firebaseapp.com",
	projectId: "twitter-clone-1c774",
	storageBucket: "twitter-clone-1c774.appspot.com",
	messagingSenderId: "377867142932",
	appId: "1:377867142932:web:85d620a16e48d46b232401"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
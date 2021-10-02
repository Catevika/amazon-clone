import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAG-mV7LZMPz04Qv4JCZ0BWBLAfhZFJ8CA',
	authDomain: 'clone-b8ca1.firebaseapp.com',
	projectId: 'clone-b8ca1',
	storageBucket: 'clone-b8ca1.appspot.com',
	messagingSenderId: '491121701591',
	appId: '1:491121701591:web:88454a9b1dbdec5b73b692'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

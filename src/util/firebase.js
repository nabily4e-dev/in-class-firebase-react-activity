// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB_T_7UH2xAs8rQGeDeOJRXrvROtO5UHlI',
	authDomain: 'firebas-auth-react-context.firebaseapp.com',
	projectId: 'firebas-auth-react-context',
	storageBucket: 'firebas-auth-react-context.appspot.com',
	messagingSenderId: '761647815113',
	appId: '1:761647815113:web:9e95415fa4bd489f1ff018',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

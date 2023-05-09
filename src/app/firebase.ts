// Import the functions you need from the SDKs you need
import { ENV } from '@/shared/config'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import './firebase-auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ENV.API_KEY,
    authDomain: ENV.AUTH_DOMAIN,
    projectId: 'weblog-c5d09',
    storageBucket: ENV.STORAGE_BUCKET,
    messagingSenderId: ENV.MESSAGING_SENDER_ID,
    appId: ENV.APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

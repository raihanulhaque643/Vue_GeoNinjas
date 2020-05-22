import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDE5DbXcPE5q9HwUA6Jav_KE-_CTQzG6cs",
  authDomain: "vue-geo-ninjas-45557.firebaseapp.com",
  databaseURL: "https://vue-geo-ninjas-45557.firebaseio.com",
  projectId: "vue-geo-ninjas-45557",
  storageBucket: "vue-geo-ninjas-45557.appspot.com",
  messagingSenderId: "570341342161",
  appId: "1:570341342161:web:8612f126bbd70aa514fef0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()

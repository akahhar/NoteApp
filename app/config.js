import * as firebase from "firebase";
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAX9oswuNzPK8kJVu7ZMIQsH8OhUiB6gew",
    authDomain: "mynoteapp-f9002.firebaseapp.com",
    projectId: "mynoteapp-f9002",
    storageBucket: "mynoteapp-f9002.appspot.com",
    messagingSenderId: "235688338877",
    appId: "1:235688338877:web:7fcdcac2bc3785cee91ed4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };

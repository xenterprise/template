import firebase from 'firebase'

const Config = {
    apiKey: "AIzaSyB_dlp4VFZv3SETGAGCsdef0wiZp7MwPG8",
    authDomain: "apnicv-488dc.firebaseapp.com",
    databaseURL: "https://apnicv-488dc.firebaseio.com",
    projectId: "apnicv-488dc",
    storageBucket: "apnicv-488dc.appspot.com",
    messagingSenderId: "1004709971994"
  };

const fire = firebase.initializeApp(Config);
export default fire;
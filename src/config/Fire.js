import firebase from 'firebase'

const Dev = {
    apiKey: "AIzaSyB_dlp4VFZv3SETGAGCsdef0wiZp7MwPG8",
    authDomain: "apnicv-488dc.firebaseapp.com",
    databaseURL: "https://apnicv-488dc.firebaseio.com",
    projectId: "apnicv-488dc",
    storageBucket: "apnicv-488dc.appspot.com",
    messagingSenderId: "1004709971994"
  };


// const Production = {
//   apiKey: "AIzaSyCbjcNghPTLVsukjnvbIYqBFn8A-hiX0MY",
//   authDomain: "acpb-4bc85.firebaseapp.com",
//   databaseURL: "https://acpb-4bc85.firebaseio.com",
//   projectId: "acpb-4bc85",
//   storageBucket: "",
//   messagingSenderId: "615359412310"
// };

const fire = firebase.initializeApp(Dev);
export default fire;
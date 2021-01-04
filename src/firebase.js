import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAomALnzTVlcIGBwyqNByGp94k1vcuqIpM",
    authDomain: "linkedin-clone-yt-141cf.firebaseapp.com",
    projectId: "linkedin-clone-yt-141cf",
    storageBucket: "linkedin-clone-yt-141cf.appspot.com",
    messagingSenderId: "739354238349",
    appId: "1:739354238349:web:2a918f156d3dc88e6631c4",
    measurementId: "G-6T63KLQ3LG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
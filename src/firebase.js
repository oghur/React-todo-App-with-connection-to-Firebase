import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyC-GG7tizOKCFyG7II_E26pWsQu0gwxt2Y",
    authDomain: "fir-app2021-a2df7.firebaseapp.com",
    projectId: "fir-app2021-a2df7",
    storageBucket: "fir-app2021-a2df7.appspot.com",
    messagingSenderId: "962304668104",
    appId: "1:962304668104:web:801b0c40fe5691301750fd",
    measurementId: "G-WYJSKK24BJ"
})

const database = firebaseApp.firestore();


export default database;
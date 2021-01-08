import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    //// your config
})

const database = firebaseApp.firestore();


export default database;

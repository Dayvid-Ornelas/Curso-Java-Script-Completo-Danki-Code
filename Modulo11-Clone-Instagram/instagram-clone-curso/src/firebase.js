import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0PvM4q7bitTACmYGIw6UqKd7Usj1UYRc",
  authDomain: "instagram-clone-curso-d801a.firebaseapp.com",
  projectId: "instagram-clone-curso-d801a",
  storageBucket: "instagram-clone-curso-d801a.firebasestorage.app",
  messagingSenderId: "1035219403884",
  appId: "1:1035219403884:web:b583c9718970875b39c449",
  measurementId: "G-BMBPMSEL5N"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const functions = firebase.functions()

export { db, auth, storage, functions }
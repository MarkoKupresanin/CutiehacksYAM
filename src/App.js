import './App.css';
import Navbar from './NavBar';
<<<<<<< Updated upstream
import Footer from './Footer';
import Home from './Home';
import BlogList from './BlogList'
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
=======
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv9viQ5RO5J1gSSqle3pWKi4ZmNo7dlfM",
  authDomain: "cutiehacks-b04fe.firebaseapp.com",
  projectId: "cutiehacks-b04fe",
  storageBucket: "cutiehacks-b04fe.appspot.com",
  messagingSenderId: "550438995683",
  appId: "1:550438995683:web:65e846b53118164c2ba7d6",
  measurementId: "G-HKFTP7W35F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

>>>>>>> Stashed changes



function App() {



  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className='content'>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/posts" component={BlogList}></Route>
          <Route path="*" />
            <NotFound />
        <Navbar />
          <Route exact path="/">
            <div className="content">
              <p>{  }</p>
            </div>
          </Route>
      </Switch>
      </div>
<<<<<<< Updated upstream
=======
      
      <button onClick="signInWithPopup">Sign In</button>
      
>>>>>>> Stashed changes
    </div>
    <Footer />
  </Router>
  );
}

export default App;

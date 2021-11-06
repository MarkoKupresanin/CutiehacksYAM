import './App.css';
import Navbar from './NavBar';
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



function App() {
const firebaseConfig = {
    apiKey: "AIzaSyC3_QW2LaKIl4wJ2abltFtjuUbN9Nxbe7E",
    authDomain: "yamdata-9a05c.firebaseapp.com",
    projectId: "yamdata-9a05c",
    storageBucket: "yamdata-9a05c.appspot.com",
    messagingSenderId: "878503987702",
    appId: "1:878503987702:web:2e7e4c1251c266c4d4dfd7"
  };



  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  
  
  const docRef = doc(db, "topics", "posts");
  getDoc(docRef).then(docSnap=>{
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  })


  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className='content'>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route path="/posts" component={BlogList}></Route> */}
          <Route path="*" />
            <NotFound />
        <Navbar />
          <Route exact path="/">
            <div className="content">
              <h1>{ title }</h1>
              
            </div>
          </Route>
      </Switch>
      </div>
    </div>
    <Footer />
  </Router>
  );
}

export default App;

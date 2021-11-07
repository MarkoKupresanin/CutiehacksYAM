import './App.css';
import Navbar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import BlogList from './BlogList'
import BlogView from './BlogView'
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";



function App() {



  return (
    <Router>
    <div className="App">
    <Navbar />
    <div className='content'>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/posts" component={BlogList}></Route>
          <Route path="/BlogView" component={BlogView}></Route>
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
    </div>
    <Footer />
  </Router>
  );
}

export default App;

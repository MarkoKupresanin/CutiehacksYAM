import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";

const BlogView = () => {
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

    return (
        <div className ="viewblog">
            <p>Here are all the blog posts from the community:</p>
        </div>
    );
}

export default BlogView;
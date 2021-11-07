import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";

const BlogList = () => {
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
    
    const createClick = () => {
        var x = document.getElementById("testControl");
        if (x.style.display === "none") { 
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        const docRef = doc(db, "topics", "posts");
        getDoc(docRef).then(docSnap=>{
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
    }

    const postBlog = () => {
        var userInput = document.getElementById("textValue").value;
        console.log(userInput);
    }

    return (
        <div className ="createblog">
            <h2>Welcome, create a new blog!</h2> 
            <button onClick={createClick}>Create New Blog</button>
            <div id ="testControl">
                <input type="text" id="textValue"/>
                <br></br>
                <button onClick={postBlog} id="postButton">Post</button>
            </div>
        </div>
    );
}
 
export default BlogList;

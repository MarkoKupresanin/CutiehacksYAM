import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";


const BlogList = () => {
  
    // const firebaseConfig = {
    //     apiKey: "AIzaSyC3_QW2LaKIl4wJ2abltFtjuUbN9Nxbe7E",
    //     authDomain: "yamdata-9a05c.firebaseapp.com",
    //     projectId: "yamdata-9a05c",
    //     storageBucket: "yamdata-9a05c.appspot.com",
    //     messagingSenderId: "878503987702",
    //     appId: "1:878503987702:web:2e7e4c1251c266c4d4dfd7"
    //   };
    
    //   const app = initializeApp(firebaseConfig);
      const db = getFirestore();
      const [Posts, setPosts]=useState([]);
      useEffect(()=>{getDocs(collection(db, "posts")).then(querySnapshot => {
        let temp = [];
        
        querySnapshot.forEach(query => {temp.push((query.data()))})
        setPosts(temp);
        })})
      
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
        var userPostInput = document.getElementById("textValue").value;
        console.log(userPostInput);
        addDoc(collection(db, "posts"), {
            content: userPostInput,
            title: 'Marko is cool'
            });
    }

    const replyClick = () => {
        var y = document.getElementById("replyControl");
        if (y.style.display === "none") { 
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    }

    const postReply = () => { 
        var userReplyInput = document.getElementById("postValue").value;
        console.log(userReplyInput);
        var userInput = document.getElementById("textValue").value;
        console.log(userInput);



        // try {
        //     const docRef = doc(db, "topics");
        //     addDoc(docRef).then({
        //         content: userInput,
        //         title: "my title!"
        //     })
        // console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        // console.error("Error adding document: ", e);
        // }
    }

    return (
        <div className ="createblog">
            <h2>Welcome, create a new blog!</h2> 
            <button onClick={createClick}>Create New Blog</button>
            <div id ="testControl">
                <textarea type="text" id="textValue"/>
                <br></br>
                <button onClick={postBlog} id="postButton">Post Blog</button>
                <div id="reply">
                    <button onClick={replyClick} id="replyButton">Reply</button>
                    <div id ="replyControl">
                        <textarea type="text" id="postValue"/>
                        <br></br>
                        <button onClick={postReply} id="postreplyButton">Post Reply</button>
                        {Posts.map(post => <div >{JSON.stringify(post)}</div>)};
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlogList;

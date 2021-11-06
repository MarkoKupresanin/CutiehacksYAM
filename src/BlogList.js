import { useState, useEffect } from 'react';


const BlogList = () => {
    
    const createClick = (event) => {
        event.preventDefault();
        alert("It works mf!");
    }

    return (
        <div classname ="createblog">
            <h2>Welcome, create a new blog!</h2>
            <button onClick={createClick()}>Create Blog</button>
        </div>
    );
}
 
export default BlogList;

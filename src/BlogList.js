import { useState, useEffect } from 'react';


const BlogList = () => {
    
    const createClick = () => {
        console.log("It works mf!");
    }

    return (
        <div classname ="createblog">
            <h2>Welcome, create a new blog!</h2>
            <button onClick={createClick()}>Create Blog</button>
        </div>
    );
}
 
export default BlogList;

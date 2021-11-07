const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <h1>YAM Blogs</h1>
                <a href="/">Home </a>
                <a href="/posts">Create Post</a>
                <a href="/BlogView">View Posts</a>
            </div>
        </nav>
    );
}

export default Navbar;
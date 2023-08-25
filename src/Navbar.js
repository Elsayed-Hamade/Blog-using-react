const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>ReactBlog</h1>
            <div className="links">
                <a href="/" className="home">Home</a>
                <a href="/create" className="create">Create</a>
                <a href="/create" className="create">New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;
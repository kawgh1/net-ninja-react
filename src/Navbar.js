import React from "react";
import { Link } from "react-router-dom";

// using Router Link tags, they still act as anchor "a" tags on the DOM, but
// React Router knows to intercept those server requests and render the appropriate page component

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>The Dojo Blog</h1>
            </Link>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;

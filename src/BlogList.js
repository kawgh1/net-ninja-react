import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs, title }) {
    // the State for blogs in the in the "Home" component, so we should
    // define our blog functions (like handleDelete) in the Home component
    // we don't want functions in one component messing with state in another component

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;

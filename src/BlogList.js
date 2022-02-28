import React from "react";

function BlogList({ blogs, title, handleDelete }) {
    // the State for blogs in the in the "Home" component, so we should
    // define our blog functions (like handleDelete) in the Home component
    // we don't want functions in one component messing with state in another component

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>
                        Delete Blog
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;

import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetchHook from "./useFetchHook";
import "./index.css";

function BlogDetails() {
    // useParams allows us to grab route parameters {blog.id} from the route
    const { id } = useParams();
    const {
        data: blog,
        error,
        isLoading,
    } = useFetchHook("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        });
    };

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div> {blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;

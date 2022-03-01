import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isLoading, setIsLoading] = useState(false);
    // useHistory
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);
        setIsLoading(true);

        // POST to our API
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsLoading(false);
            console.log("new blog posted!");
            // history.go(-1);
            history.push("/");
        });
    };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
                {/* Body */}
                <label>Body:</label>
                <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    required
                />
                {/* Author */}
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isLoading && <button>Post Blog!</button>}
                {isLoading && <button disabled>Posting Blog...</button>}
            </form>
        </div>
    );
}

export default Create;

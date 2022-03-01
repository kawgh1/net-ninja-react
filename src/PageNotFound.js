import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry!</h2>
            <p>That page couldn't be found : (</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default PageNotFound;

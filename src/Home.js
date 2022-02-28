import React from "react";
import { useState } from "react";

function Home() {
    // let name = "mario"; // not reactive - wont update on re-render
    const [name, setName] = useState("mario"); // reactive
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("luigi");
        console.log(name);
    };
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>
                {name} is {age} years old.
            </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;

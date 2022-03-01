import React from "react";
import useFetchHook from "./useFetchHook";
import BlogList from "./BlogList";

function Home() {
    // This function was extracted into a Custom Hook 'useFetchHook.js'
    // leaving this code here for reference

    // const [blogs, setBlogs] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch("http://localhost:8000/blogs")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw Error(
    //                     "ERROR: could not fetch data for that resource."
    //                 );
    //             }

    //             return res.json();
    //         })
    //         .then((data) => {
    //             // console.log(data);
    //             setBlogs(data);
    //             setIsLoading(false);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setIsLoading(false);
    //         });
    // }, []); // run once

    // "data:blogs" here means grab the data from the hook but call it "blogs" moving forward
    const {
        data: blogs,
        isLoading,
        error,
    } = useFetchHook("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isLoading && <div>Loading...</div>}
            {/* All Blogs */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* Mario's Blogs */}
            {blogs && (
                <BlogList
                    blogs={blogs.filter((blog) => blog.author === "Mario")}
                    title="Mario's Blogs"
                />
            )}
        </div>
    );
}

export default Home;

import { useState, useEffect } from "react";

const useFetchHook = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // abort controller
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error(
                        "ERROR: could not fetch data for that resource."
                    );
                }

                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                }
                setError(err.message);
                setIsLoading(false);
            });

        // clean up function
        return () => {
            // stop the fetch call
            abortCont.abort();
            // console.log("clean up");
        };
    }, [url]); // run once, requires a url as parameter

    return { data, isLoading, error };
};

export default useFetchHook;

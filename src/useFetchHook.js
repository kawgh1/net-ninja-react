import { useState, useEffect } from "react";

const useFetchHook = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
                setError(err.message);
                setIsLoading(false);
            });
    }, [url]); // run once, requires a url as parameter

    return { data, isLoading, error };
};

export default useFetchHook;

### Net Ninja React course

https://github.com/iamshaunjp/Complete-React-Tutorial
https://www.youtube.com/watch?v=NbTrGcz4DW8

-   this uses a localhost server, won't run on web

### Quick Refresher on React basics

-   #### best practices for:
    -   react dev tools
    -   component layout & design
    -   react router
    -   hooks
    -   forms & controlled inputs
    -   api calls to get and post data in components
    -   custom hooks

### Run fake JSON server on localhost:8000 to query data to and from

-   **npx json-server --watch data/db.json --port 8000**
-   **http://localhost:8000/blogs**
-   ### Endpoints

    -   /blogs GET Fetch all blogs
    -   /blogs/{id} GET Fetch a single blog
    -   /blogs POST Add a new blog
    -   /blogs/{id} DELETE Delete a blog

-   ### React Router

    -   Version 5 is stable
    -   React Router intercepts new page requests from hitting the server, and renders those pages as components, saving server calls and improving performance
    -   **npm install react-router-dom@5**

-   ### useEffect cleanup function

    -   our custom useFetchHook makes an API call
    -   if a user quickly goes to another internal page, that call is still running and can render an error - **"can't perform a react state update on an unmounted component"**

-   ### Optional - set up a backend node server to build out API
-   https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

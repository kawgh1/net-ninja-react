import Navbar from "./Navbar";
import "./App.css";
import Home from "./Home";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import PageNotFound from "./PageNotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                        {/* Not Found - 404 */}
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

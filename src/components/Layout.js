import React from 'react';
import {Route, useLocation} from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Navbar from "./Navbar";
import Home from "../pages/home";
import About from "../pages/about";
import PrivateRoute from "./PrivateRoute";

const Layout = () => {
    const location = useLocation();

    if (location.pathname === "/") return <Login />

    else if (location.pathname === "/signup") return <Signup />

    else {
        return (
            <div>
                <Navbar />
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/about" component={About} />
            </div>
        );
    }
}

export default Layout;
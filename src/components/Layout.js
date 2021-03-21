import React from 'react';
import {BrowserRouter as Router, Route, useLocation} from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import {AuthContext} from "../context/authContext";
import Navbar from "./Navbar";
import Home from "../pages/home";
import About from "../pages/about";

const Layout = () => {
    const location = useLocation();

    if (location.pathname === "/") return <Login />

    else if (location.pathname === "/signup") return <Signup />

    else {
        return (
            <div>
                <Navbar />
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/signup" component={Signup} />
            </div>


        );
    }
}

export default Layout;
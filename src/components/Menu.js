import React from 'react';
import './Menu.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const Menu = () => {
    return (
        <>
            <Router>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                    <Switch>
                    <Route path="/Home">
                        {/* <About /> */}
                    </Route>
                    <Route path="/users">
                        {/* <Users /> */}
                    </Route>
                    <Route path="/">
                        {/* <Home /> */}
                    </Route>
                    </Switch>
            </Router>
        </>
    )
}

export default Menu

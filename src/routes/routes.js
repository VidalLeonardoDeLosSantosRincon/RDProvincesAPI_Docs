import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router } from "react-router-dom";

//components
import App from "../components/App";

//pages
import {PageNotFound} from "../pages/404"
import Home from "../pages/Home"

export const AppRoutes = ()=>{
    return(
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </App>
        </Router>
    );
}
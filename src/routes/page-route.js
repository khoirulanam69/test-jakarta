import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from '../pages/HomePage';

const pageRoute = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default pageRoute;
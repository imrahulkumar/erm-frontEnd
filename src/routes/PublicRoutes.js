import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import Login from './public/login/Login';
import Signup from './public/signup/Signup';

function PublicRoutes() {
    return (
        <Switch>
           
            {/* <Route path={SLUGS.login} render={() => <div>login</div>} /> */}
            <Route path={SLUGS.login} component={Login}/>
            {/* <Route path={SLUGS.signup} render={() => <div>signup</div>} /> */}
            <Route path={SLUGS.signup} component={Signup}/>
            <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
            <Redirect to={SLUGS.signup} />
        </Switch>
    );
}

export default PublicRoutes;

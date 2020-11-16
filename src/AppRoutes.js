import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Layouts from './Components/Layouts';
import LandingPage from './Components/LandingPage';
import Home from './Pages/Home';
import SoftwareDevs from './Pages/SoftwareDevs';
import Journal from './Pages/Journal';
import Faq from './Pages/Faq';
import ProductDesigner from './Pages/ProductDesigner';
import ApplyYourKnow from './Pages/ApplyYourKnow';
// import MainNav from './Components/Menu/MainNav';

const AppRoute = ({ Component, path, exact, ...rest }) => {
    return (
        <Route exact={exact} path={path} {...rest} render={(props) => {
            return (
                <Layouts>
                    <Component {...rest} {...props} />
                </Layouts>
            )
        }} />
    )
}

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} exact />
                    <AppRoute exact path="/home" Component={Home}  />
                    <AppRoute path="/learnable" Component={Home} />
                    <AppRoute path="/developers" Component={SoftwareDevs} />
                    <AppRoute path="/designers" Component={ProductDesigner} />
                    <AppRoute path="/apply" Component={ApplyYourKnow} />
                    <AppRoute path="/journal" Component={Journal} />
                    <AppRoute path="/faq" Component={Faq} />
              </Switch>
            </BrowserRouter>
        </>
    )
}
export default AppRouter;

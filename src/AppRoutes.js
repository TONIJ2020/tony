import React from 'react';
import Layouts from './Components/Layouts';

import Home from './Pages/Home';
import SoftwareDevs from './Pages/SoftwareDevs';
import Journal from './Pages/Journal';
import Faq from './Pages/Faq';
import ProductDesigner from './Pages/ProductDesigner';
import ApplyYourKnow from './Pages/ApplyYourKnow';
import MainNav from './Components/Menu/MainNav';

const AppRoute = ({ Component, path, exact, ...rest }) => {
    return (
        <Route exact={exact} path={path} {...rest} render={(props) => {
            return (
                <Layout>
                    <Component {...rest} {...props} />
                </Layout>
            )
        }} />
    )
}

const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={LandingPage} exact />
                    <AppRoute path="/home" Component={Home} exact />
                </Switch>
            </Router>
        </>
    )
}


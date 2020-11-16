import React from 'react';
import AppRouter from './AppRoutes';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import LandingPage from './Components/LandingPage';
// import './App.css';
// import Home from './Pages/Home';
// import SoftwareDevs from './Pages/SoftwareDevs';
// import Journal from './Pages/Journal';
// import Faq from './Pages/Faq';
// import ProductDesigner from './Pages/ProductDesigner';
// import ApplyYourKnow from './Pages/ApplyYourKnow';
// import MainNav from './Components/Menu/MainNav';

function App() {
  return (
    <div>
      <AppRouter />
    </div>
    // <BrowserRouter>
    //   <div className="App">
    //     <header className="App-header">
    //       <MainNav />
    //     </header>
    //     <Switch>
    //       <Route exact path="/" component={LandingPage} /> 
    //       <Route exact path="/learnable" component={Home} />
    //       <Route path="/developers" component={SoftwareDevs} />
    //       <Route path="/designers" component={ProductDesigner} />
    //       <Route path="/apply" component={ApplyYourKnow} />
    //       <Route path="/journal" component={Journal} />
    //       <Route path="/faq" component={Faq} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import './App.css';
import Home from './Components/Home';
import SoftwareDevs from './Components/SoftwareDevs';
import Journal from './Components/Journal';
import Faq from './Components/Faq';
import ProductDesigner from './Components/ProductDesigner';
import ApplyYourKnow from './Components/ApplyYourKnow';
import MainNav from './Components/MainNav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <MainNav />
        </header>
        <Switch>
          <Route exact path="/" component={LandingPage} /> 
          <Route exact path="/learnable" component={Home} />
          <Route path="/developers" component={SoftwareDevs} />
          <Route path="/designers" component={ProductDesigner} />
          <Route path="/apply" component={ApplyYourKnow} />
          <Route path="/journal" component={Journal} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
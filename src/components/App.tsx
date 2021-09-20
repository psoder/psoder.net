import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Style.css'

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound404 from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Header />

        <div id="main-container" className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound404} />
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

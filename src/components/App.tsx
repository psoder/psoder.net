import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

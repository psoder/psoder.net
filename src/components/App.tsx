import React from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Slideshow />
        <About />
        <Footer />
    </div>
  );
}

export default App;

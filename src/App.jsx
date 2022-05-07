import React from 'react';
//I imported all the components and containers I need into the main file below.
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  //This is for rendering the different sections of my site.
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
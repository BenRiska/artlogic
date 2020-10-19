import React from 'react';
import './App.css';
import Nav from "./Nav"
import Banner from "./Banner"
import Products from "./Products"
import GalleryPromo from "./GalleryPromo"
import Stats from "./Stats"
import ProductSlides from "./ProductSlides"
import Contact from "./Contact"
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      
      {/* Nav */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* Products */}
      <div className="space">
      <Products/>
      {/* Gallery*/}
      <GalleryPromo/>
      {/* Stats */}
      <Stats/>
      {/* productSlides */}
      <ProductSlides/>
      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <Footer/>
      </div>
    </div>
  );
}

export default App;

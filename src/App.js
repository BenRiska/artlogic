import React from 'react';
import './App.css';
import Nav from "./Nav"
import Banner from "./Banner"
import Products from "./Products"

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
      {/* Stats */}
      {/* productSlides */}
      {/* Support */}
      {/* Contact */}
      {/* Footer */}
      </div>
    </div>
  );
}

export default App;

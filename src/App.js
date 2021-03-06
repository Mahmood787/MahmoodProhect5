import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Section2 from './components/section2/section2';
import GetToKnowUs from './components/getToKnowUs/getToKnowUs'
import Slider3 from './components/slider/slider3';
import Footer from './components/getToKnowUs/footer/footer';

function App() {
  return (
    <div className="App">
        <div className="bg">
          <Header />
          <Slider3 />
          </div>
        <Section2/>
        <GetToKnowUs/>
        <Footer/>
    </div>
  );
}
export default App;

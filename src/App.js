import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Section from './components/section/Section';
import Section2 from './components/section2/section2';
import GetToKnowUs from './components/getToKnowUs/getToKnowUs'
import AutoRotatingCarouselModal from './components/slider/slider'
import Sliderss from './components/slider/slider222';
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

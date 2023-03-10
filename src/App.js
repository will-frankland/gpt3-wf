import React from 'react';

import { Footer, Blog, Possibilities, Features, WhatGPT3, Header } from './containers/index.js';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;

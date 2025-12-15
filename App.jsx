import React from 'react';
import AboutUs from './components/AboutUs';
import './App.css';

const App = () => {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <button onClick={() => alert('Get Started Clicked!')}>Get Started</button>
      <AboutUs />
    </div>
  );
};

export default App;

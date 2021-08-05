import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Sky from './components/Sky/Sky';
import CloudContainer from './components/CloudContainer/CloudContainer';
import { Component } from 'react';
import Land from './components/Land/Land';
import Ocean from './components/Ocean/Ocean';
import DeepOcean from './components/DeepOcean/DeepOcean';
import BikiniBottom from './components/BikiniBottom/BikiniBottom';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <CloudContainer />
          <Sky />
          <Land />
          <Ocean />
          <DeepOcean />
          <BikiniBottom />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;

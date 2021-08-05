import React from 'react';
import './CloudContainer.css';
import { Parallax } from 'react-scroll-parallax';
import Cloud1 from '../Cloud1/Cloud1';
import Cloud2 from '../Cloud2/Cloud2';
import Cloud3 from '../Cloud3/Cloud3';
import Cloud4 from '../Cloud4/Cloud4';

const CloudContainer = () => {
  return (
    <div id="cloudContainer">
      <Parallax className="cloud-parallax" x={[-20, 20]}>
        <Cloud1 />
      </Parallax>
      <Parallax className="cloud-parallax" x={[-10, 10]}>
        <Cloud2 />
      </Parallax>
      <Parallax className="cloud-parallax" x={[-30, 30]}>
        <Cloud3 />
      </Parallax>        
      <Parallax className="cloud-parallax" x={[-50, 50]}>
        <Cloud4 />
      </Parallax>
    </div>
  )
}

export default CloudContainer;
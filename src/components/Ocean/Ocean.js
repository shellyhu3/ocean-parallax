import React from 'react';
import './Ocean.css';
import { Parallax } from 'react-scroll-parallax';
import { ReactComponent as Fish} from './fish.svg';


const Ocean = () => {
  return(
    <div id="ocean">
      <Parallax className="fish-parallax-rev" x={[0, 60]} y={[0, 70]}>
        <Fish />
      </Parallax>
      <Parallax className="ocean-parallax" y={[-100, 100]}>
        <h1>the</h1>
      </Parallax>
      <Parallax className="fish-parallax" x={[0, 60]} y={[0, -60]}>
        <Fish />
      </Parallax>
    </div>
  )
}

export default Ocean;
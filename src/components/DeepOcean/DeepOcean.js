import React from 'react';
import './DeepOcean.css';
import { Parallax } from 'react-scroll-parallax';


const copy = 'Ocean'.split('');

const DeepOcean = () => {
  return(
    <div>
      <div id="deepOcean">
        <div>
          {copy.map((letter, i) => {
            return (
              <Parallax className="deep-ocean-parallax" x={[100 * (i-2), 0]}>
                <h1>{letter}</h1>
              </Parallax>
            )
          })}
        </div>
      </div>
      <div id="black"></div>
      <div id="teal"></div>
      <div id="oceanFloor"></div>
    </div>
  )
}

export default DeepOcean;
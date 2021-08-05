import React from 'react';
import './Land.css';
import { Parallax } from 'react-scroll-parallax';

const total_waves = [1, 2, 3];

const Land = () => {
  return(
    <div id="land">
      <div className="bird-container bird-container1 bird-container-rev">
        <div className="bird bird1"></div>
      </div>
      <div className="cluster">
        <Parallax className="is-in-parallax" x={[100, -100]}>
          <h1>is in</h1>
        </Parallax>
      </div>
      {total_waves.map((wave, i) => {
          return (
            <Parallax className="wave-parallax" x={[-100* i, 100 * i]}>
                <div className={"wave wave" + i}></div>
            </Parallax>
          )
        })}
    </div>
  )
}

export default Land;
import React from 'react';
import './Sky.css';
import { Parallax } from 'react-scroll-parallax';

const copy = 'What'.split('');
const total_birds = [1, 2, 3, 4, 5];

const Sky = () => {
  return(
    <div id="sky">
      <div id="what">
        {copy.map((letter, i) => {
          return (
            <Parallax className="what-parallax" x={[0, 100 * (i-1)]}>
              <h1>{letter}</h1>
            </Parallax>
          )
        })}
      </div>
      {total_birds.map((num) => {
        return(
          <div className={"bird-container bird-container" + num}>
            <div className={"bird bird" + num}></div>
          </div>
        )
      })}
    </div>
  )
}

export default Sky;
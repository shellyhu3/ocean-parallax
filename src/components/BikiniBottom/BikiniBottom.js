import React from 'react';
import './BikiniBottom.css';
import { Parallax } from 'react-scroll-parallax';
import spongebob from './sponge.png';
import squidward from './squid.png';
import patrick from './pat.png';
import flower1 from './flower1.png';
import flower2 from './flower2.png';
import flower3 from './flower3.png';
import flower4 from './flower4.png';
import Image from '../Image/Image';

// const total_flowers = [flower1, flower2, flower3, flower4];

const BikiniBottom = () => {
  return(
    <div>
      <div id="flowerClouds">
        {/* {total_flowers.map((flower, i) => {
          return(
            <Parallax className={"flower-parallax flower-parallax" + i} x={[100 * (i - 2), 0]} y={[-10 * i, 10 * i]}>
              <Image src={flower} className="flower" id={"flower" + (i+1)} />
            </Parallax>
          )
        })} */}
        <Parallax className="flower-parallax flower-parallax1" x={[30, -30]} y={[10, -10]}>
          <Image src={flower1} className="flower" id="flower1" />
        </Parallax>
        <Parallax className="flower-parallax flower-parallax2" x={[-20, 20]} y={[-50, 50]}>
          <Image src={flower2} className="flower" id="flower2" />
        </Parallax>
        <Parallax className="flower-parallax flower-parallax3" x={[-50, 50]} y={[30, -30]}>
          <Image src={flower3} className="flower" id="flower3" />
        </Parallax>
        <Parallax className="flower-parallax flower-parallax4" x={[-10, 10]} y={[-20, 20]}>
          <Image src={flower4} className="flower" id="flower4" />
        </Parallax>
      </div>
      <div id="bikiniBottom">
        <Parallax className="house-parallax" y={[30, -30]}>
          <div id="houses">
              <div id="pat" className="house">
                <Image src={patrick} alt="" />
                <div className="path">
                  <div id="patPath"></div>
                </div>
              </div>
              <div id="squid" className="house">
                <Image src={squidward} alt="" />
                <div className="path">
                  <div id="squidPath">
                    <div className="path-block"></div>
                    <div className="path-block"></div>
                    <div className="path-block"></div>
                  </div>
                </div>
              </div>
              <div id="sponge" className="house">
                <Image src={spongebob} alt="" />
                <div className="path">
                  <div id="spongePath"></div>
                </div>
              </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default BikiniBottom;
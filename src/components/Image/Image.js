import React, { Component } from 'react';
import { withController } from 'react-scroll-parallax';

class Image extends Component {
    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };

    render() {
        return <img src={this.props.src} onLoad={this.handleLoad} alt="" className={this.props.className} id={this.props.id} />;
    }
}

export default withController(Image);
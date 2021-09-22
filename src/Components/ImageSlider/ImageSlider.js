import React from 'react';
import { Carousel, Wrap } from './ImageSliderElements';

const ImageSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }    

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
        </Carousel>
    );
};


export default ImageSlider;
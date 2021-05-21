import React from 'react'
import {Carousel} from '3d-react-carousal'
import {slides} from '../data/images'

export const Slideshow = () => {
    
    return    <Carousel slides={slides}  autoplay={true} interval={10000}></Carousel>
}

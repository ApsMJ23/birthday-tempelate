import React from 'react'
import {Carousel} from '3d-react-carousal'
import pic1 from '../data/PIC1.jpeg'
import pic2 from '../data/PIC2.jpeg'
import pic3 from '../data/PIC3.jpeg'
import pic4 from '../data/PIC4.jpeg'
import pic5 from '../data/PIC5.jpeg'

export const Salvi = () => {
    let slide = [
        <img src={pic1} alt='1'/>,
        <img src={pic2} alt='2'/>,
        <img src={pic3} alt='3'/>,
        <img src={pic4} alt='4'/>,
        <img src={pic5} alt='5'/>,
    ]
    return (<>
        <div className='parallax-sa'>
            <h1 className="sp-title">Happy Birthday Limraa!!!</h1>
            <div className="sa-container">
                <h5>
                    Dear limra, thank you for being my friend and guiding me with your wise advice in good and bad times.Thank you for listening to me and gossiping with me. I don't know what I would have done without you cause you make me guienly happy.You make my life less shitty. I have many things to say but all I can say that I ❤️y and I'll be their when you need me I'm just a call away forever chap to you 😂😂😂.
                </h5>
                <br></br>
                <h4 style={{fontWeight:'bold'}}>#committed to you for life</h4>
            </div>
        </div>
            <div className="carousel">
                <h1>Memories</h1>
                <Carousel slides={slide}  autoplay={true} interval={10000}></Carousel>
            </div>
            </>
    )
}

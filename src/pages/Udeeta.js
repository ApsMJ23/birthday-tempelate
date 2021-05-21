import React from 'react'
import {Carousel} from '3d-react-carousal'
import pic1 from '../data/PIC1.jpeg'
import pic2 from '../data/PIC2.jpeg'
import pic3 from '../data/PIC3.jpeg'
import pic4 from '../data/PIC4.jpeg'
import pic5 from '../data/PIC5.jpeg'


export const Udeeta = () => {
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
                    Hey Limra! Many many happy returns of the day.  I wish everyone in our squad were there to celebrate this day with you. A few kind words for you (because you deserve it) -
                </h5>
                <br />
                <h5>Your advices have always saved us (Me and Salvi) at important times. You are one of the few straight forward person that I've met so far. You never hesitate to put down your thoughts when needed and I've always admired that. Keep being the way you are and let's hope we can meet soon. 
Happy birthday once again. 
Be safe and have fun. </h5>
                <h5>Lots of love,</h5>
                <h5>Udeeta</h5>
            </div>
        </div>
            <div className="carousel">
                <h1>Memories</h1>
                <Carousel slides={slide}  autoplay={true} interval={10000}></Carousel>
            </div>
            </>
    )
}

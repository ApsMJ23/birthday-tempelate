import React from 'react'
import { profile_img } from '../data/images'
import {Slideshow} from '../components/Slideshow'

export const Home = () => {
    return (<>
        <div className="parallax">
        <div className='container home-container'>
            <div className='row'>
                <div class='col overlap'>
                    <img src={profile_img} alt="" />
                </div>
                <div class='col underlap'>
                    <h1>Happy Birthday</h1>
                </div>
            </div>
        </div>
        </div>
        <div className='carousel'>
            <h1>Wall of Beauty!!!</h1>
            <Slideshow/>
        </div>
        </>
    )
}

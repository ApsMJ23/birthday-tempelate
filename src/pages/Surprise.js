import React from 'react'
import picture from '../mars.png'
    
export const Surprise = () => {
    return (
        <div className="parallax-ap">
            <h1 className='sp-title'>I sent our names to Mars!!!!</h1>
            <div>
            <div className="sp-container">
                <h4>Since You're the star of my show...(If they ever make a show on me xD) I wanted to name a star
                    after you, but this pandemic ruined my plan, so I had to regroup and think about a new plan.
                    Since we were angry with each other and not talking, everytime I missed you I used to start thinking
                    about things I could do to make your birthday special, so here is One of those Ideas. </h4>
            </div>
            </div>
            <img src={picture} alt="" className='mars-img'/>
            
        </div>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'
import {data} from '../data/images'

export const Apurv = () => {
    return (<>
        <div className="parallax-ap">  
            <div className="btn-container">
                <Link to='/apurv/surprise' className='btn btn-danger link-s'>Your Surprise!!!</Link>
                <Link to='/apurv/wilu' className='btn btn-danger link-w'>Why I love You</Link>
            </div>
            <h1 className="ap-title">Our Everything First....</h1>
            <div className="card-container">
                {data.map((item)=>{
                    return(

                        <div className="card-right" key={item.id}>
                            <div className="card-header">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="card-body">
                                <h1>{item.text}</h1>
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
        </>
    )
}

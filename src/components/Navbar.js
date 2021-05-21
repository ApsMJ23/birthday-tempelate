import React from 'react'
import logo from '../logo.jpg'
import {Link} from 'react-router-dom'
import '../index.css'


export const Navbar = () => {
    return (
        <nav className='navbar bg-transparent navbar-expand-lg navbar-light fixed-top'>
            <div className="navheader navbar-header">
                <Link to='/'>
                <img src={logo} alt="logo" className='logo'/>
                </Link>
            </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav1">
                    <ul className="navbar-nav">
                        <li className='navbar-item'>
                            <Link to='/apurv' className="link" style={{ textDecoration: 'none' }}>
                            <h5>Apurv</h5>
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/salvi' className="link" style={{ textDecoration: 'none' }}>
                            <h5>Salvi</h5>
                            </Link>
                        </li> <li className='navbar-item'>
                            <Link to='/udeeta' className="link" style={{ textDecoration: 'none' }}>
                            <h5>Udeeta</h5>
                            </Link>
                        </li>
                    </ul>
                    </div>
        </nav>
    )
}

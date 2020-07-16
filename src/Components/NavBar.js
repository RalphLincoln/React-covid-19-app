import React, { Component } from 'react'

// IMPORTING AN ICON FROM REACT ICON'S FONT AWESOME
import { FaAlignRight } from 'react-icons/fa';

// IMPORT A LOGO FROM IMAGES
import logo from '../images/logo.png';

// IMPORTING FROM REACT ROUTER DOM
import { Link } from 'react-router-dom';




export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to='/'>
                    <img src={logo} style={{ width: '50%' }} alt="My Logo" />
                </Link>
                <button style={{ borderStyle: 'none !important' }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaAlignRight className='links' />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav pl-3 pr-3 font-weight-bold ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link links text-uppercase pr-5" to='/'>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link links text-uppercase pr-5" href="https://paystack.com/pay/wear-off-covid-19">Supports</a>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link links text-uppercase pr-5" to='news'>
                                News
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link links text-uppercase pr-5" to='about'>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

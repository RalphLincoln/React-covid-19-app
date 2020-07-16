import React from 'react'

// IMPORTING LOGO FROM IMAGES
import Logo from '../images/logo.png'

// IMPORTING FROM REACT ROUTER DOM
import { Link } from 'react-router-dom';

// IMPORTING ICONS FROM REACT ICONS
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <div style={{ width: '200px', height: '100px', top: '0%' }}>
            <div className="container-fluid bg-white mx-auto text-secondary fixed-bottom">
                <div className="row">

                    <div className="col-md-4">
                        <img src={Logo} style={{ width: '20%' }} className='img-fluid ml-auto' alt="" />
                    </div>
                    <div className="col-md-8 pt-4">
                        <div className='row footerCenter'>
                            <div className="col-md-4">
                                <p>All Rights Reserved 2020</p>
                            </div>
                            <div className="col-md-4 pb-3">
                                <a className='pr-3 text-secondary' href=""><FaFacebookF /></a>
                                <a className='pr-3 text-secondary' href=""><FaInstagram /></a>
                                <a className='pr-3 text-secondary' href=""><FaLinkedinIn /></a>
                                <a className='pr-3 text-secondary' href=""><FaTwitter /></a>
                                <a className='pr-3 text-secondary' href=""><FaYoutube /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
{/* <div class="row mx-md-n5">
    <div class="col-md-6 px-md-5">
        <div class="">
            All Rights Reserved
                        </div>
    </div>
    <div class="col-md-6 px-md-5">
        <div class="p-3">
            <div className='d-flex  pt-4 flex-row-reverse bd-highlight'>
               
            </div>
        </div>
    </div>
</div> */}
import React from 'react'

// IMPORTING FROM REACT ROUTER DOM
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className='mx-auto container pt-5 text-center'>
            <h1 data-aos="zoom-in-right" className='display-1 font-weight-bolder text-secondary'>404</h1>
            <p data-aos="zoom-in-right" className='font-weight-bold text-secondary'>SORRY, PAGE NOT FOUND</p>

            <Link data-aos="flip-right" style={{ backgroundColor: '#8CCFD7' }} className="btn  text-uppercase" to='/'>
                Home
            </Link>
        </div>
    )
}

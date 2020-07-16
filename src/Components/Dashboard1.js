import React, { useRef, useEffect } from 'react'

// IMPORTING GSAP PLUGIN
import { TweenMax, Power3 } from 'gsap';

// IMPORTING IMAGES 
import Image from '../images/image2.jpeg';

export default function Dashboard1() {
    let logoItem = useRef(null);
    let item1 = useRef(null);
    let item2 = useRef(null);
    let item3 = useRef(null);
    let btn = useRef(null);

    useEffect(() => {
        TweenMax.to(
            logoItem,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeInOut
            }
        )
        TweenMax.to(
            item1,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeInOut,
                delay: 0.3
            }
        )
        TweenMax.to(
            item2,
            .8,
            {
                opacity: 3,
                y: -20,
                ease: Power3.easeInOut,
                delay: 0.6
            }
        )
        TweenMax.to(
            item3,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeInOut,
                delay: 0.1
            }
        )
        TweenMax.to(
            btn,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeInOut,
                delay: 0.7
            }
        )
    }, [])


    return (
        <div className='text-light anim1 mb-4 p-5 mt-3' style={{ backgroundColor: '#F7FAFF', borderRadius: '50px 30px 30px 50px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pad text-left">
                        <h1 ref={el => { logoItem = el }} className="font-weight-bold text-secondary">Stay Safe<span style={{ color: '#8CCFD7' }}>.</span></h1>
                        <h1 ref={el => { item1 = el }} className="font-weight-bold text-secondary">Sanitize Constantly<span style={{ color: '#8CCFD7' }}>.</span></h1>
                        <h1 ref={el => { item2 = el }} className="font-weight-bold text-secondary mr-3">Wear a Mask<span style={{ color: '#8CCFD7' }}>.</span></h1>
                        <div ref={el => { btn = el }} className='pt-3'>
                            <a href='https://selfassessment.ncdc.gov.ng/' style={{ backgroundColor: '#8CCFD9' }} className='btn pr-3 pl-3 pt-1 pb-1'>Take a test</a>
                        </div>
                        <span style={{ fontSize: '10px' }} className='text-secondary'>You'll be taken to the NCDC website for a WHO approved test.</span>
                    </div>
                    <div className="col-md-6">
                        <img ref={el => { item3 = el }} src={Image} className='img-fluid' style={{ borderRadius: '150px 110px 15px 150px' }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

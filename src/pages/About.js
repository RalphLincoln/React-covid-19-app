import React from 'react'

// IMPORTING IMAGES
import Image from '../images/about-us-pic.jpg'

export default function About() {
    return (
        <div>
            <div className="container-fluid mb-5 pb-5 mt-5 text-secondary">
                <div className="row">
                    <div data-aos="zoom-out-down" className="col-md-7 mt-4">
                        <p>
                            We are ensuring provision of adequate, relevant, reliable and relatable information about COVID-19, debunking fake news and providing safety, health and precautionary tips that could help people stay safe, informed and protected.
                        </p>
                        <p>
                            We gather data on cases, perceptions, emotions and other relevant variables on the Coronavirus. We have a database of information that is helping researchers and scholars during and after this outbreak.
                        </p>
                    </div>
                    <div data-aos="zoom-out-down" className="col-md-5">
                        <img src={Image} style={{ borderRadius: '150px 10px 150px 15px' }} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

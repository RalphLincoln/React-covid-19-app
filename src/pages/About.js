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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis reiciendis iste repellendus eius sed doloribus expedita architecto, a, ad quos est ab minima nisi? Eaque earum odit dolor tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit consectetur nulla recusandae optio iusto possimus obcaecati, odio, illo dolorum ab dicta minus qui fuga harum. Itaque maxime delectus excepturi!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi a ipsam explicabo eum, sequi voluptate quidem atque. Fugiat minus error mollitia vel est ut, exercitationem incidunt quas porro quibusdam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolor minus iusto rerum quis assumenda. Maxime ex perferendis, eveniet officia eius tempora, cumque sit pariatur, animi molestiae illum perspiciatis temporibus!</p>
                    </div>
                    <div data-aos="zoom-out-down" className="col-md-5">
                        <img src={Image} style={{ borderRadius: '150px 10px 150px 15px' }} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

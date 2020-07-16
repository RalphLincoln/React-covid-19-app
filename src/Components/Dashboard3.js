import React, { Component } from 'react'

// IMPORTING FONT AWESOME ICON FROM REACT-ICONS
import { FcRight } from 'react-icons/fc';

export default class Dashboard3 extends Component {


    constructor(props) {
        super(props)

        this.state = {
            states: []
        }
    }


    states = [];

    componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://covidnigeria.herokuapp.com/api", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    states: result.data.states
                })
            })
            .catch(error => console.log('error', error));
    }
    render() {
        const { states } = this.state;
        return (
            <div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="col-md-6 col-sm-12">
                            <h4 style={{ color: '#574b90' }} className='p-2'>Cases per state</h4>
                            <div className="table-responsive-sm">
                                <table className="table w-auto table-borderless">
                                    <thead>
                                        <tr>
                                            <th className='text-secondary' scope="col">State</th>
                                            <th className='text-secondary' scope="col">Total</th>
                                            <th className='text-secondary' scope="col">Active</th>
                                            <th className='text-secondary' scope="col">Recovered</th>
                                            <th className='text-secondary' scope="col">Death</th>
                                        </tr>
                                    </thead>
                                    {
                                        states.map(data => (
                                            <tbody key={data._id}>
                                                <tr>
                                                    <th style={{ backgroundColor: '#fff8fa' }} className='text-secondary' scope="row">{data.state}</th>
                                                    <td style={{ backgroundColor: '#eeecf9' }} className="text-center text-secondary">{data.confirmedCases}</td>
                                                    <td style={{ backgroundColor: '#F5F5FF' }} className="text-center text-secondary">{data.casesOnAdmission}</td>
                                                    <td style={{ backgroundColor: '#e6fff8' }} className="text-secondary text-center">{data.discharged}</td>
                                                    <td style={{ backgroundColor: '#fff7f2' }} className="text-secondary text-center">{data.death}</td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="col-md-6 col-sm-12 cardpad">
                            <h4 style={{ color: '#574b90' }} className='p-2'>Early Infection Sources</h4>
                            <div className="">
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary'>Residents of Atiku Abubakar's Estate</h5>
                                                Tassle Palm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3 align-self-center' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                On 20/03/2020
                                                <h5 className='text-secondary pt-1'>Flight BA75</h5>
                                                Arrived to Lagos from UK
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3 align-self-center' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                On 18/03/2020
                                                <h5 className='text-secondary pt-1'>Aero Contractor Flight</h5>
                                                From Lagos to Abuja with Atiku's Son or Bauchi Governor
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3 align-self-center' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary pt-1'>Direct or indirect contact with Bauchi State Governor</h5>
                                                Attended Press conference with Bauchi State Governor, or have been in contact with a Gov't official who has been in the same premises as the Governor
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary'>The launch of 2500 Housing units</h5>
                                                Bauchi State
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                NEC meeting with Bauchi State Gov't, or are in close proximity with someone who did
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                You just returned from UK, FRANCE, SPAIN, NETHERLANDS, GERMANY, UAE, CANADA, USA, in the last two weeks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary'>Flight TK625</h5>
                                                Arrival date: 13th of march
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary'>Flight KLM 587</h5>
                                                Arrival date: 18th of march
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary'>Flight KL0582/KL0587</h5>
                                                London-Amsterdam-Lagos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3 align-self-center' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                On 13th of march
                                                <h5 className='text-secondary pt-1'>Virgin Atlantic VS411 Lufthansa flight LLH568</h5>
                                                To Lagos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                On 14th of march
                                                <h5 className='text-secondary'>Turkish Flight TK 625</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary'>Virgin Atlantic VS411</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                On 20th of march
                                                <h5 className='text-secondary'>BA Flight 0083</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                Recently came into Nigeria from any country with recorded cases of COVID-19
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                On 16th of march
                                                <h5 className='text-secondary'>Visited Access Bank, Ligalu Ayorinde Branch, Lagos</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <div className="media">
                                            <FcRight className='mr-3' style={{ fontSize: '170%' }} />
                                            <div className="media-body text-secondary">
                                                <h5 className='text-secondary'>Had a contact with Alh. Aliko Dangote and Alhaji Ladan Salihu</h5>
                                                Anytime from 18th March
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



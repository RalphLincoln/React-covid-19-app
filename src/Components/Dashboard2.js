import React, { Component } from 'react';



export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sampleTested: '',
            confirmedCases: '',
            deaths: '',
            activeCases: '',
            dischargedCases: '',
        }
    }

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
                    sampleTested: result.data.totalSamplesTested,
                    confirmedCases: result.data.totalConfirmedCases,
                    deaths: result.data.death,
                    activeCases: result.data.totalActiveCases,
                    dischargedCases: result.data.discharged
                });
            })
            .catch(error => console.log('error', error));
    }


    render() {
        return (
            <div className='mb-5'>
                <h3 className='text-center pb-5 pt-5 text-secondary font-weight-bold'>Total Cases in Nigeria</h3>
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-md-12">
                            <div className="row">
                                <div data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" className="col-md-4 mx-auto">
                                    <div style={{ borderLeft: '5px solid #574b90', backgroundColor: '#F0F3F8' }} className="card">
                                        <div className="card-body">
                                            <h5 style={{ fontSize: '14px' }} className="card-title text-center text-secondary">Total Samples Tested</h5>
                                            <h2 style={{ color: '#574b90' }} className='text-center'>{this.state.sampleTested}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" className="col-md-4 cardpad mx-auto">
                                    <div className="card" style={{ borderLeft: '5px solid #633fe4', backgroundColor: '#F5F5FF' }}>
                                        <div className="card-body">
                                            <h5 style={{ fontSize: '14px' }} className="card-title text-center text-secondary">Total Confirmed Cases</h5>
                                            <h2 style={{ color: '#633fe4' }} className='text-center'>{this.state.confirmedCases}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" className="col-md-4 cardpad mx-auto">
                                    <div className="card" style={{ borderLeft: '5px solid #26a26b', backgroundColor: '#e6fff8' }}>
                                        <div className="card-body">
                                            <h5 style={{ fontSize: '14px' }} className="card-title text-center text-secondary">Total Discharged Cases</h5>
                                            <h2 style={{ color: '#26a26b' }} className='text-center'>{this.state.dischargedCases}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row pt-4">

                                <div data-aos="fade-left"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" className="col-md-4 mx-auto">
                                    <div className="card" style={{ borderLeft: '5px solid #cf5300', backgroundColor: '#fff7f2' }}>
                                        <div className="card-body">
                                            <h5 style={{ fontSize: '14px' }} className="card-title text-center text-secondary">Total Active Cases</h5>
                                            <h2 style={{ color: '#cf5300' }} className='text-center'>{this.state.activeCases}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" className="col-md-4 cardpad mx-auto">
                                    <div className="card" style={{ borderLeft: '5px solid #df0a56', backgroundColor: '#fff7f2' }}>
                                        <div className="card-body">
                                            <h5 style={{ fontSize: '14px' }} className="card-title text-center text-secondary">Total Deaths</h5>
                                            <h2 style={{ color: '#df0a56' }} className='text-center'>{this.state.deaths}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

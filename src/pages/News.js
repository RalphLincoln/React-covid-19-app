import React, { Component, useEffect } from 'react'

export default class News extends Component {

    constructor(props) {
        super(props)

        this.state = {
            composes: []
        }

    }
    componentDidMount() {
        fetch(process.env.REACT_APP_BACKEND_URL + "/compose")
            .then(response => response.json())
            .then(result => {
                console.log(result.composes)
                this.setState({
                    composes: result.composes
                });
            });
    };
    render() {
        const { composes } = this.state
        return (
            <>
                {
                    composes.map(data => (
                        <div className="container mt-3 text-secondary">
                            <div className="media">
                                <div className="media-body">
                                    <h4 className="mt-0">{data.title}</h4>
                                    <p>{data.body}</p>
                                    <div className="row">
                                        < p style={{ fontSize: '12px' }} className='pl-3 pt-2'>Jul 1st, 2020 02:18 PM</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))
                }
            </>
        )
    }
}





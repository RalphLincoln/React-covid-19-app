import React, { Component } from 'react';


export default class Compose extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault()
        fetch("https://cors-anywhere.herokuapp.com/" + process.env.REACT_APP_BACKEND_URL + "/compose/posts", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body
            })
        })
    }



    render() {
        const { title, body } = this.state
        return (
            <div className='container mb-5 pb-5'>
                <form onSubmit={this.submitHandler} action="">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={title} id='title' onChange={this.changeHandler} className='form-control' name='title' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Message</label>
                        <textarea name="body" value={body} id="body" onChange={this.changeHandler} className='form-control' cols="30" rows="10"></textarea>
                    </div>
                    <button onSubmit={this.submitHandler} style={{ backgroundColor: '#F5F5FF' }} className='btn pl-4 pr-4' type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

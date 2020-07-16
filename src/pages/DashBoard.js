import React, { Component } from 'react'

// IMPORTING FROM COMPONENTS
import Dashboard1 from '../Components/Dashboard1';
import Dashboard2 from '../Components/Dashboard2';
import Dashboard3 from '../Components/Dashboard3';
import DashBoard4 from '../Components/DashBoard4';


export default class DashBoard extends Component {
    render() {
        return (
            <>
                <Dashboard1 />
                <Dashboard2 />
                <Dashboard3 />
                <DashBoard4 />
            </>
        )
    }
}



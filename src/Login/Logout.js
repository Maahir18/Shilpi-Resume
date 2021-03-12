import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div>
                <h1>Your are logged out!</h1>
                <Link to="/">Click here to restart</Link>
            </div>
        )
    }
}

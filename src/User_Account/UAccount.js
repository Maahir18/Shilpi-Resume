import axios from 'axios';
import React, { Component } from 'react'
import Navigation from '../components/Navigation.js'
import UserPostForm from './UserPostForm'


export default class UAccount extends Component {
    
    render() {
       console.log(localStorage.getItem("token"));

        return (
            <div className="App">
               
                <header className="App-header"> 
                    <Navigation />
                    
                </header>
                <div className="abt-page abtme-page">
                    <h1>User Account</h1>
                    <UserPostForm />
                </div>
            </div>
        )
    }
}

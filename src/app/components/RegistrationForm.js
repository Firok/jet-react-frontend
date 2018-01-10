import React from 'react';
import $ from 'jquery';

import {User} from "../models/User"

export class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        };
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    addUser(data) {
        $.ajax({
            url: 'http://localhost:8000/adduser',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function (data, status, xhr) {
                this.props.addUser(new User(this.state.username,this.state.password));
                this.setState({
                    username:'',
                    password:''
                });
                alert("Registration successfully")
                console.log("Submitted");
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
                alert(err)
            }
        })
    }

    handleSubmitUser(event) {
        event.preventDefault();
        let data = new User(this.state.username,this.state.password);
        this.addUser(data);
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitUser}>
                <div className="form-group">
                    <input type="text" value={this.state.username} className="form-control App-form-input" id="username"
                           placeholder="Username" onChange={this.handleUsernameChange.bind(this)} required/>
                </div>

                <div className="form-group">
                    <input type="password" value={this.state.password} className="form-control" id="password"
                           placeholder="Password" onChange={this.handlePasswordChange.bind(this)} required/>
                </div>

                <button className="App-btn">Register</button>
            </form>
        );
    }
}

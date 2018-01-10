import React from 'react';
import $ from 'jquery';

import {User} from "../models/User"

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            users: []
        };
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    // get all users from the server in local storage file users.json
    getUsers() {
        $.ajax({
            url: 'http://localhost:8000/users',
            datatype: 'json',
            cache: false,
            success: function (data) {
                data = JSON.parse(data)
                this.setState({users: data}, function () {
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })
    }

    componentWillMount() {
        this.getUsers()
    }

    componentDidMount() {
        this.getUsers();
    }


    handleSubmitLogin(event) {
        event.preventDefault();
        let data = new User(this.state.username, this.state.password);
        let user = this.state.users.find(user => (user.username == data.username && user.password == data.password))
        console.log(user)
        if (user != null)
            alert(user.username + " is connected");
        else
            alert("Username or password erors!");
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="App-login-container">
                <h3>Login</h3>
                <form onSubmit={this.handleSubmitLogin}>
                    <div className="form-group">
                        <input type="text" value={this.state.username} className="form-control" id="username"
                               placeholder="Username" onChange={this.handleUsernameChange.bind(this)} required/>
                    </div>

                    <div className="form-group">
                        <input type="password" value={this.state.password} className="form-control" id="password"
                               placeholder="Password" onChange={this.handlePasswordChange.bind(this)} required/>
                    </div>

                    <button className="App-btn">Login</button>
                </form>
            </div>
        );
    }
}

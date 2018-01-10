import React from 'react';
import $ from 'jquery';
import {RegistrationForm} from './RegistrationForm';
import {UserList} from './UserList';

export class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
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
                    console.log(this.state.users);
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

    //handle add user
    handleAddUser(user) {
        let users = this.state.users;
        users.push(user);
        this.setState({
            users: users
        });
    }


    render() {
        return (
            <div>
                <div className="App-container color-dark">
                    <div className="col">
                        <h3>Register</h3>
                    </div>
                    <div className="col">
                        <h3>User List</h3>
                    </div>
                </div>
                <div className="App-container color-light">
                    <div className="col App-register-content">
                        {/*insert Registration Form component */}
                        <RegistrationForm addUser={this.handleAddUser.bind(this)}/>
                    </div>
                    <div className="col">
                        {/* insert User List component */}
                        <UserList users={this.state.users}/>
                    </div>
                </div>
            </div>
        );
    }
}

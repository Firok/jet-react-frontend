import React from 'react';
import PropTypes from 'prop-types';
import {UserItem} from './UserItem';

export class UserList extends React.Component {

    constructor() {
        super();
        this.state = {
            key: -1
        };
    }

    onDbClickPassword(key) {
        this.setState({key:key});
    }

    render() {
        let userItems;
        if (this.props.users) {
            userItems = this.props.users.map((user, i) => <UserItem key={i} id={i} user={user} onDbClickPassword={this.onDbClickPassword.bind(this,i)} type={i === this.state.key ? "text":"password"}/> )
        }
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                {userItems}
                </tbody>
            </table>
        );
    }

}

UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};



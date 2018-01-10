import React, {Component} from 'react';
import PropTypes from 'prop-types';



export class UserItem extends Component {

    viewPassword(){
      this.props.onDbClickPassword(this.props.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.username}</td>
                <td>
                    <input type={this.props.type} onDoubleClick={this.viewPassword.bind(this)} className="App-table-input" value={this.props.user.password} readOnly="true" />
                </td>
            </tr>
        );
    }

}

UserItem.propTypes = {
    user: PropTypes.object,
    id: PropTypes.number,
    type: PropTypes.string
};

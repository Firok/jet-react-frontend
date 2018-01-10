import React from 'react';
import { Link } from 'react-router-dom'

export class NavigationBar extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">Navigation Bar</a>

                    <div className="App-nav-right">
                        <Link to="/register" className="App-nav-btn" role="button" aria-pressed="true">REGISTER</Link>
                        <Link to="/login" className="App-nav-btn" role="button" aria-pressed="true">LOGIN</Link>
                    </div>
                </nav>
            </header>
        );
    }
}

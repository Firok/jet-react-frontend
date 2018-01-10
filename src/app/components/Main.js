import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Register} from './Register';
import {Login} from './Login';

export class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Register}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </main>
        );
    }
}

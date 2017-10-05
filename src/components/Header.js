import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../containers/Login';

export default class Header extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-12">
                    <header>
                        <nav className="main-nav">
                            <NavLink exact activeClassName="active" to='/'>Home</NavLink >
                            <NavLink activeClassName="active" to='/about'>About</NavLink >
                            <NavLink activeClassName="active" to='/tasks'>Tasks</NavLink>
                        </nav>
                        <Login />
                    </header>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';

export default class UserBox extends Component {
    render() {
        return(
            <div>
                {this.props.user.isLoggedIn ?
                    <div className="user-box">
                        <h2>Profile info:</h2>
                        <img src={this.props.user.photo} alt=""/>
                        <p className="email">{this.props.user.email}</p>
                        <p className="name">{this.props.user.name}</p>
                    </div>
                    : null}
            </div>
        )
    }
}
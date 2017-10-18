import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';

/*Actions*/
import { loginAction, logoutAction } from '../actions/login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handlelogOut = this.handlelogOut.bind(this);
    }
    handleLogin() {
        this.props.loginAction();
    }
    handlelogOut() {
        this.props.logoutAction();
    }
    render() {
        const name = 'LOG Out '+this.props.login.name;
        return (
            <div className="Login">
                {this.props.login.isLoggedIn ?
                    <Button onClick={this.handlelogOut}>{name}</Button>
                    :
                    <Button onClick={this.handleLogin}>Log in with Google</Button>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: bindActionCreators(loginAction, dispatch),
        logoutAction: bindActionCreators(logoutAction, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
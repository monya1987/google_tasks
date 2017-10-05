import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';

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
                    <RaisedButton label={name} secondary={true} onClick={this.handlelogOut} />
                    :
                    <RaisedButton label="Log in with Google" secondary={true} onClick={this.handleLogin} />
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
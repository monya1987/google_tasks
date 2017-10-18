import React, { Component } from 'react';

import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: theme.root,
    rootPaper: theme.rootPaper,
    userBox: {

    },
    userEmail: {

    },
    userName: {

    }
});

class UserBox extends Component {
    render() {
        const {classes, user} = this.props;
        return(
            <div>
                {user.isLoggedIn ?
                    <div className={classes.userBox}>
                        <h2>Profile info:</h2>
                        <img src={user.photo} alt=""/>
                        <p className={classes.userEmail}>{user.email}</p>
                        <p className={classes.userName}>{user.name}</p>
                    </div>
                    : null}
            </div>
        )
    }
}

export default compose(withStyles(styles), withWidth())(UserBox);
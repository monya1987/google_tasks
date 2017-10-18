import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from 'material-ui/Grid';

import compose from 'recompose/compose';

import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

import Login from '../containers/Login';

const styles = theme => ({
    root: theme.root,
    mainNav: {
        display: 'flex',
        '& > a': {
            padding: '10px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            '&:hover': {
                background: '#ccc',
                textDecoration: 'none',
            }
        }
    },
    header: {
        background: '#eee',
        paddingTop: '8px',
        '& .active': {
            background: '#ccc',
        }
    },
    loginWrapper: {
        textAlign: 'right',
    }
});

class Header extends Component {
    render() {
        const {classes} = this.props;
        return(
            <header className={classes.header}>
                <div className={classes.root}>
                <Grid container>
                    <Grid item xs={8}>
                        <nav className={classes.mainNav}>
                            <NavLink exact activeClassName="active" to='/'>Home</NavLink >
                            <NavLink activeClassName="active" to='/about'>About</NavLink >
                            <NavLink activeClassName="active" to='/tasks'>Tasks</NavLink>
                        </nav>
                    </Grid>
                    <Grid item xs={4} className={classes.loginWrapper}>
                        <Login />
                    </Grid>
                </Grid>
                </div>
            </header>
        )
    }
}

export default compose(withStyles(styles), withWidth())(Header);
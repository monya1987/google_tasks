import React, { Component } from 'react';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: theme.root,
    rootPaper: theme.rootPaper,
})

class About extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.rootPaper}>
                <Grid item xs={8}>
                    <h1>About page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid>
            </Paper>
        );
    }
}

export default compose(withStyles(styles), withWidth())(About);

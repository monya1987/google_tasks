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

class App extends Component {
      render() {
          const {classes} = this.props;
          return (
              <Paper className={classes.rootPaper}>
                  <Grid item xs={8}>
                  <h1>Home page for my Pet Project.</h1>
                      <h4>Builded with:</h4>
                      <ul>
                          <li>React</li>
                          <li>Redux</li>
                          <li>React Router</li>
                          <li>Material UI</li>
                      </ul>
                  </Grid>
              </Paper>
        );
      }
}

export default compose(withStyles(styles), withWidth())(App);

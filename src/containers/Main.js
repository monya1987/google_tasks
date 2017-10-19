import React, { Component } from 'react';

/*Components*/
import App from '../components/App';
import About from '../components/About';
import Header from '../components/Header';
import Tasks from './Tasks';

/*Redux*/
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*Router*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/*Material*/
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'normalize.css';

import { getInitialState } from '../actions/login';

const theme = (outerTheme) => {
    const typography = {
        fontFamily: `'Arial'`,
        fontSize: 16,
        fontWeight: 500,
        color: '#1b2833',
        display4: {
            marginTop: 0,
            lineHeight: 1,
            color: '#1b2833',
        },
    }
    return {
        ...outerTheme,
        typography,
        root: {
            margin: '0 auto',
            maxWidth: '1200px',
            width: '100%',
            '& a': {
                color: '#1a0dab',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                }
            }
        },
        rootPaper: {
            margin: '40px auto 0',
            maxWidth: '1200px',
            width: '100%',
            padding: '20px',
        },
        overrides: {
            MuiButton: {
                root: {
                    backgroundColor: '#0099EE',
                    borderRadius: 0,
                    lineHeight: '20px',
                    fontWeight: 300,
                    textAlign: 'center',
                    padding: '8px 16px',
                    color: '#fff',
                    [outerTheme.breakpoints.down('sm')]: {
                        minWidth: 120,
                    },
                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: '#85c7ea',
                    }
                },
            }
        }
    }
}
const outerTheme = createMuiTheme();


class Main extends Component {
    componentWillMount() {
        this.props.getInitialState();
    }
    render() {
        return (
            <Provider store={this.props.store}>
                <MuiThemeProvider theme={outerTheme}>
                    <MuiThemeProvider theme={theme}>
                        <BrowserRouter>
                            <div className="container">
                                <Header />
                                <Switch>
                                    <Route exact path='https://monya1987.github.io/react_google_tasks/build/' component={App} />
                                    <Route path='https://monya1987.github.io/react_google_tasks/build/about' component={About} />
                                    <Route path='https://monya1987.github.io/react_google_tasks/build/tasks' component={Tasks} />
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </MuiThemeProvider>
                </MuiThemeProvider>
            </Provider>
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
        getInitialState: bindActionCreators(getInitialState, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
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
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import { getInitialState } from '../actions/login';


const theme = getMuiTheme();


class Main extends Component {
    componentWillMount() {
        this.props.getInitialState();
    }
    render() {
        return (
            <Provider store={this.props.store}>
                <MuiThemeProvider theme={theme}>
                    <BrowserRouter>
                        <div className="container">
                            <Header />
                            <Switch>
                                <Route exact path='/' component={App} />
                                <Route path='/about' component={About} />
                                <Route path='/tasks' component={Tasks} />
                            </Switch>
                        </div>
                    </BrowserRouter>
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
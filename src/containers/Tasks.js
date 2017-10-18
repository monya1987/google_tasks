import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import compose from 'recompose/compose';

import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


/*Actions*/
import { renameTasksList, removeTasksList, createTasksList, getTasksList } from '../actions/tasks';
import Task from './Task'
import UserBox from '../components/UserBox';
import Button from 'material-ui/Button';

import { Route, NavLink } from 'react-router-dom';

const styles = theme => ({
    root: theme.root,
    rootPaper: theme.rootPaper,
    taskList: {
        listStyle: 'none',
        margin: 0,
        marginTop: '20px',
        padding: 0,
        '& > li': {
            borderBottom: '2px solid #ccc',
            paddingBottom: '15px',
            marginBottom: '15px',
        },
        '& .active': {
            borderLeft: '2px solid #FC0064',
            paddingLeft: '15px',
            color: '#FC0064',
        }
    },
    taskDate: {
        display: 'block',
        fontStyle: 'italic',
        fontSize: '11px',
        color: '#666',
        textAlign: 'right',
    },
    messageWrap: {

    },
    taskTitle: {
        display: 'block',
        marginBottom: '10px',
        fontSize: '18px',
        textDecoration: 'none',
    },
    renameList: {
        fontSize: '11px',
        marginRight: '10px',
    },
    removeList: {
        fontSize: '11px',
        marginRight: '10px',
    },
    buttonSome: {
        color: '#000',
        background: 'transparent',
        border: '2px solid #ccc',
    }
});


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleRename = this.handleRename.bind(this);
        this.handleCreateList = this.handleCreateList.bind(this);
    }
    handleCreateList() {
        this.props.createTasksList();
    }
    handleOpen() {

    }
    handleRemove(event) {
        let id = this.listInfo.dataset.id;
        event.preventDefault();
        this.props.removeTasksList(id);
    }
    handleRename(event) {
        let id = this.listInfo.dataset.id;
        event.preventDefault();
        this.props.renameTasksList(id);
    }
    componentWillMount() {
        this.props.getTasksList();
    }


    render() {
        const {classes, login, tasks} = this.props;
        return (
            <Paper className={classes.rootPaper}>
                {login.isLoggedIn ?
                    <Grid container>
                        <Grid item xs={3}>
                                <h2>Tasks List</h2>
                                <Button
                                    className={classes.buttonSome}
                                    onClick={this.handleCreateList}>
                                    Create new list
                                </Button>
                                <ul className={classes.taskList}>
                                {tasks.map((item, index) => {
                                    const a = Date.parse(item.updated);
                                    const d = new Date(a);
                                    console.log(item.title);
                                    return (
                                        <li
                                            key={index}
                                            className={classes.messageWrap}
                                            data-id={item.id}
                                            ref={(input) => { this.listInfo = input; }}
                                        >
                                            <span className={classes.taskDate}>{`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()} `}</span>
                                            <NavLink
                                                onClick={this.handleOpen}
                                                activeClassName={classes.taskTitleActive}
                                                to={{pathname: `/tasks/${item.id}`, itemTitle: item.title}}
                                                className={classes.taskTitle}
                                            >
                                                    {item.title}
                                            </NavLink>
                                            <a href="#rename" onClick={this.handleRename} className={classes.renameList}>Rename</a>
                                            <a href="#remove" onClick={this.handleRemove} className={classes.removeList}>Remove</a>
                                        </li>
                                    )
                                })}
                                </ul>
                            </Grid>
                            <Grid item xs={5}>
                                <Route path='/tasks/:id' component={Task}/>
                            </Grid>
                            <Grid item xs={4}>
                                <UserBox user={login} />
                            </Grid>
                    </Grid>
                    :
                    <Grid item xs={12}>
                        <h1>Tasks page</h1>
                        <p>Please login to control your task lists.</p>
                    </Grid>
                }

            </Paper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer,
        tasks: state.getTasksReducer.tasks,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTasksList: bindActionCreators(getTasksList, dispatch),
        createTasksList: bindActionCreators(createTasksList, dispatch),
        removeTasksList: bindActionCreators(removeTasksList, dispatch),
        renameTasksList: bindActionCreators(renameTasksList, dispatch),
    }
};

export default compose(withStyles(styles), withWidth(), connect(mapStateToProps, mapDispatchToProps))(Tasks);
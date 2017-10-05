import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*Actions*/
import { renameTasksList, removeTasksList, createTasksList, getTasksList } from '../actions/tasks';
import Task from './Task'
import UserBox from '../components/UserBox';
import RaisedButton from 'material-ui/RaisedButton';

import { Route, NavLink } from 'react-router-dom';



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
        // if (this.props.login.isLoggedIn) {
            this.props.getTasksList();
        // }
        // if (!this.props.login.isLoggedIn) {
        //     this.props.history.push('/');
        // }
    }
    componentWillReceiveProps(nextProps) {
        // console.log('aaaaaaaaaaaa',nextProps.tasks.length);
        // console.log('bbbbbbbbbbbb',this.props.tasks.length);
        // console.log(next);
        // this.props.getTasksList();
        // if (this.props.login.isLoggedIn) {
        // this.props.getTasksList()
        // }
    }
    componentDidMount() {
        // if (this.props.login.isLoggedIn) {
        //     this.props.getTasksList()
        // }
    }

    render() {
        // console.log(this.props.tasks);
        return (
            <div>
                {this.props.login.isLoggedIn ?
                    <div>
                        <div className="row">
                            <div className="col-sm-3">
                                <h2>Tasks List</h2>
                                <RaisedButton
                                    label="Create new list"
                                    primary={true}
                                    fullWidth={true}
                                    onClick={this.handleCreateList} />
                                <ul className="tasks-list">
                                {this.props.tasks.map((item, index) => {
                                    const a = Date.parse(item.updated);
                                    const d = new Date(a);
                                    return (
                                        <li
                                            key={index}
                                            className="messages-wrapper"
                                            data-id={item.id}
                                            ref={(input) => { this.listInfo = input; }}
                                        >
                                            <span className="date">{`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()} `}</span>
                                            <NavLink
                                                onClick={this.handleOpen}
                                                activeClassName="active"
                                                to={{pathname: `/tasks/${item.id}`, itemTitle: item.title}}
                                                className="title"
                                            >
                                                    {item.title}
                                            </NavLink>
                                            <a href="#rename" onClick={this.handleRename} className="rename">Rename</a>
                                            <a href="#remove" onClick={this.handleRemove} className="remove">Remove</a>
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                            <div className="col-sm-5">

                                <Route path='/tasks/:id' component={Task}/>
                            </div>
                            <div className="col-sm-4">
                                <UserBox user={this.props.login} />
                            </div>
                        </div>
                    </div>
                    :
                   <div>Login please</div>
                }

            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*Actions*/
import { getTaskList, deleteTask, addTask, completeTask } from '../actions/task';

import compose from 'recompose/compose';

import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    gray: {
        color: 'gray',
    },
    container: {
        borderLeft: '2px solid #eee',
        paddingLeft: '20px',
        marginLeft: '20px',
        height: '100%',
    },
    smallBtn: {
        marginLeft: '10px',
        fontSize: '12px',
    },
});


class Task extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.history.location.pathname !== this.props.location.pathname) {
            this.props.getTaskList(nextProps.match.params.id);
        }
    }

    componentWillMount() {
        this.props.getTaskList(this.props.match.params.id);
    }

    deleteTask(event) {
        event.preventDefault();
        this.props.deleteTask(event.target.dataset.id, this.props.match.params.id);
    }

    addTask(event) {
        event.preventDefault();
        this.props.addTask(this.props.match.params.id);
    }

    completeTask(event) {
        let status = event.target.dataset.status;
        this.props.completeTask(event.target.dataset.id, this.props.match.params.id, status);
    }

    render() {
        const {classes, tasks} = this.props;
        return (
            <div className={classes.container}>
                <h2><span className={classes.gray}>List:</span></h2>
                <a href="#addNew" onClick={this.addTask}>Add NEW</a>
                {tasks.map((item, index) => {
                    const a = Date.parse(item.updated);
                    const d = new Date(a);
                    return (
                        <div key={index}>
                        {item.title ?
                        <div
                            className="messages-wrapper"
                        >
                            <p>
                                <small className={classes.gray}>{`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()} `}</small><br/>
                                {item.status === 'completed' ? <s>{item.title}</s> : <span>{item.title}</span>}
                                <a className={classes.smallBtn} href="#complete" data-id={item.id} data-status={item.status} onClick={this.completeTask}>
                                    {item.status === 'completed' ? 'Start' : 'Complete' }
                                </a>
                                <a className={classes.smallBtn} href="#complete" data-id={item.id} onClick={this.deleteTask}>Delete</a>
                            </p>
                        </div>
                            : null}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.getTaskReducer.tasks,
        tasksId: state.getTaskReducer.tasksId,
        fetched: state.getTaskReducer.fetched,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTaskList : bindActionCreators(getTaskList, dispatch),
        deleteTask : bindActionCreators(deleteTask, dispatch),
        completeTask : bindActionCreators(completeTask, dispatch),
        addTask : bindActionCreators(addTask, dispatch),
    }
};

export default compose(withStyles(styles), withWidth(), connect(mapStateToProps, mapDispatchToProps))(Task);
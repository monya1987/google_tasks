import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*Actions*/
import { getTaskList } from '../actions/task';
import Button from 'material-ui/Button';



class Task extends Component {
    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
    }

    // componentWillMount() {
    //     this.props.getTaskList(this.props.match.params.id);
    // }

    componentWillReceiveProps(nextProps) {
        if (this.props.history.location.pathname !== this.props.location.pathname) {
            this.props.getTaskList(nextProps.match.params.id);
        }
    }

    componentWillMount() {
        this.props.getTaskList(this.props.match.params.id);
    }

    shouldComponentUpdate() {
        return true;
    }

    handleAddTask() {

    }

    handleClearCompleted() {

    }

    render() {
        // console.log(this);
        return (
            <div>
                <h2><span>List name:</span> {this.props.location.itemTitle}</h2>
                <Button onClick={this.handleAddTask}>Add Task</Button>
                <Button style={{float: 'right'}} onClick={this.handleClearCompleted}>Clear completed</Button>
                <br/><br/>
                {this.props.task.map((item, index) => {
                    const a = Date.parse(item.updated);
                    const d = new Date(a);
                    return (
                        <div key={index}>
                        {item.title ?
                        <div
                            className="messages-wrapper"
                            data-id={item.id}
                        >
                            {item.title}
                            <span className="date">{`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()} `}</span>
                            <a href="#complete">complete</a>
                            <br/><br/>
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
        task: state.getTaskReducer.tasks,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTaskList : bindActionCreators(getTaskList, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task)
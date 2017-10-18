import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*Actions*/
import { getTaskList } from '../actions/task';

import compose from 'recompose/compose';

import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
    gray: {
        color: 'gray',
    },
});


class Task extends Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.history.location.pathname !== this.props.location.pathname) {
            this.props.getTaskList(nextProps.match.params.id);
        }
    }

    componentWillMount() {
        this.props.getTaskList(this.props.match.params.id);
    }

    render() {
        const {classes, location, task} = this.props;
        return (
            <div>
                <h2><span className={classes.gray}>List:</span> {location.itemTitle}</h2>
                {task.map((item, index) => {
                    const a = Date.parse(item.updated);
                    const d = new Date(a);
                    return (
                        <div key={index}>
                        {item.title ?
                        <div
                            className="messages-wrapper"
                            data-id={item.id}
                        >
                            <span className={classes.gray}>{`${d.getDate()} / ${d.getMonth()} / ${d.getFullYear()} `}</span><br/>
                            {item.title}
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

export default compose(withStyles(styles), withWidth(), connect(mapStateToProps, mapDispatchToProps))(Task);
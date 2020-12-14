/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskItem from './taskitem';
import * as Actions from '../actions/actions';

const TaskList = props => {
  const { tasks, filter, setTotal } = props;

  const filteredTasks = tasks.filter(task => task.category_id === filter.id);
  const times = filteredTasks.map(task => task.time);
  let total;
  if (times.length !== 0) {
    total = times.reduce((acum, value) => acum + value);
  } else {
    total = 0;
  }

  setTotal(total);

  return (
    <div className="list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}

    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(Object),
  filter: PropTypes.objectOf(Object),
  setTotal: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: undefined,
  filter: undefined,
  setTotal: undefined,
};

const mapStateToProps = state => (
  {
    tasks: state.tasks,
    filter: state.filter,
  }
);

const mapDispatchToProps = dispatch => (
  {
    setTotal: total => dispatch(Actions.updateTotalHours(total)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import TaskItem from './taskitem';
import * as Actions from '../actions/actions';
import TaskListStyles from '../assets/stylesheets/tasklist.module.css';

const TaskList = props => {
  const { tasks, filter, setTotal } = props;
  const history = useHistory();

  const filteredTasks = tasks.filter(task => task.category_id === filter.id);
  const times = filteredTasks.map(task => task.time);
  let total;
  if (times.length !== 0) {
    total = times.reduce((acum, value) => acum + value);
  } else {
    total = 0;
  }

  setTotal(total);

  const handleClick = () => {
    history.push('/addtask');
  };

  return (
    <div className={TaskListStyles.List}>
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
      <button
        className={TaskListStyles.Button}
        type="button"
        onClick={handleClick}
      >
        New task for&nbsp;
        {filter.name}
      </button>
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

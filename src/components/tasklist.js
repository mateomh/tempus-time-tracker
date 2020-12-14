/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskItem from './taskitem';

const TaskList = props => {
  const { tasks, filter } = props;

  const filteredTasks = tasks.filter(task => task.category_id === filter.id);

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
  filter: PropTypes.arrayOf(Object),
};

TaskList.defaultProps = {
  tasks: undefined,
  filter: undefined,
};

const mapStateToProps = state => (
  {
    tasks: state.tasks,
    filter: state.filter,
  }
);

export default connect(mapStateToProps)(TaskList);

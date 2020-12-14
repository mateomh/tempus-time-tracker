import PropTypes from 'prop-types';
import TaskItemStyles from '../assets/stylesheets/taskitem.module.css';

const TaskItem = props => {
  const { task } = props;

  return (
    <div className={TaskItemStyles.Item}>
      <p className={TaskItemStyles.Desc}>{task.desc}</p>
      <p className={TaskItemStyles.Time}>
        <b>{task.time}</b>
        &nbsp;hours
      </p>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.objectOf(Object).isRequired,
};

export default TaskItem;

import PropTypes from 'prop-types';
import TaskItemStyles from '../assets/stylesheets/taskitem.module.css';

const TaskItem = props => {
  const { task } = props;
  const test = new Date(task.created_at);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = `${test.getDate()}-${months[test.getMonth()]}-${test.getFullYear()}`;
  return (
    <div className={TaskItemStyles.Item}>
      <p className={TaskItemStyles.Desc}>
        <b>{task.desc}</b>
        <small className={TaskItemStyles.Small}>
          Created on: &nbsp;
          {date}
        </small>
      </p>
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

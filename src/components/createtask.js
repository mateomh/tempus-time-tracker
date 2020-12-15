import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FormStyles from '../assets/stylesheets/form.module.css';
import * as ApiComms from '../modules/apicomms';
import * as Actions from '../actions/actions';

const CreateTask = props => {
  const {
    filter,
    user,
    showError,
    addTask,
  } = props;
  const history = useHistory();

  if (Object.keys(user).length === 0) {
    history.push('/');
    return null;
  }

  const handleClick = async () => {
    const desc = document.getElementById('task-desc');
    const time = document.getElementById('task-time');
    if (desc.value === '' || time.value === '') {
      showError('Fields cannot be empty');
    } else {
      const task = {
        desc: desc.value,
        time: time.value,
        user_id: user.id,
        category_id: filter.id,
      };
      const apiTask = await ApiComms.saveTask(task);

      if (apiTask !== undefined) {
        addTask(apiTask);
        history.push('/view');
      } else {
        showError('Task could not be created');
      }
    }
  };

  return (
    <div className={FormStyles.Form}>
      <h1 className={FormStyles.Title}>
        Task for&nbsp;
        {filter.name}
      </h1>
      <label htmlFor="task-desc" className={FormStyles.Label}>
        Task Description
        <input
          type="text"
          className={FormStyles.Input}
          placeholder="Description"
          id="task-desc"
        />
      </label>
      <label htmlFor="task-time" className={FormStyles.Label}>
        Task Time
        <input
          type="number"
          className={FormStyles.Input}
          placeholder="Time"
          id="task-time"
        />
      </label>
      <button
        type="button"
        className={FormStyles.Button}
        onClick={handleClick}
      >
        Create Task
      </button>
    </div>
  );
};

CreateTask.propTypes = {
  filter: PropTypes.objectOf(Object),
  user: PropTypes.objectOf(Object),
  showError: PropTypes.func,
  addTask: PropTypes.func,
};

CreateTask.defaultProps = {
  filter: {},
  user: {},
  showError: undefined,
  addTask: undefined,
};

const mapStateToProps = state => (
  {
    filter: state.filter,
    user: state.sessionUser,
  }
);

const mapDispatchToProps = dispatch => (
  {
    showError: error => dispatch(Actions.setError(error)),
    addTask: task => dispatch(Actions.addTask(task)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);

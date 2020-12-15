/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FormStyles from '../assets/stylesheets/form.module.css';
import * as ApiComms from '../modules/apicomms';
import * as Actions from '../actions/actions';

const SignIn = props => {
  const history = useHistory();

  const callBack = async () => {
    const userName = document.getElementById('user-name');
    const user = await ApiComms.checkUserName(userName.value);

    if (user === undefined) {
      props.displayError('user does not exists');
    } else {
      props.createSession(user);
      // const categories = await ApiComms.getCategories();
      // categories.map(category => props.addCategory(category));

      // const tasks = await ApiComms.getTasks(user.id);
      // tasks.map(task => props.addTask(task));

      history.push('/categories');
    }
  };

  return (
    <div className={FormStyles.Form}>
      <h1 className={FormStyles.Title}>Keep Tracking Your Time</h1>
      <input
        className={FormStyles.Input}
        type="text"
        placeholder="Enter Your Name"
        id="user-name"
      />
      <button
        className={FormStyles.Button}
        type="button"
        onClick={callBack}
      >
        Sign In
      </button>
    </div>
  );
};

SignIn.propTypes = {
  createSession: PropTypes.func,
  addCategory: PropTypes.func,
  addTask: PropTypes.func,
  clearTasks: PropTypes.func,
  clearFilter: PropTypes.func,
  displayError: PropTypes.func,
};

SignIn.defaultProps = {
  createSession: undefined,
  addCategory: undefined,
  addTask: undefined,
  clearTasks: undefined,
  clearFilter: undefined,
  displayError: undefined,
};

const mapDispatchToProps = dispatch => ({
  createSession: user => dispatch(Actions.createSession(user)),
  addCategory: category => dispatch(Actions.addCategory(category)),
  addTask: task => dispatch(Actions.addTask(task)),
  clearTasks: () => dispatch(Actions.clearTasks()),
  clearFilter: () => dispatch(Actions.changeFilter({})),
  displayError: error => dispatch(Actions.setError(error)),
});

export default connect(undefined, mapDispatchToProps)(SignIn);

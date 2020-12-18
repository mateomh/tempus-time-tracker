/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FormStyles from '../assets/stylesheets/form.module.css';
import * as ApiComms from '../modules/apicomms';
import * as Actions from '../actions/actions';

const SignUp = props => {
  const { displayError, createSession } = props;
  const history = useHistory();

  const callBack = async () => {
    const userName = document.getElementById('user-name');
    if (userName.value === '') {
      displayError('User name empty');
      return null;
    }

    const response = await ApiComms.createUser(userName.value);
    if (response === undefined) {
      props.displayError('User name already exists');
    } else {
      createSession(response);
      history.push('/categories');
    }
    return null;
  };

  return (
    <div className={FormStyles.Form}>
      <h1 className={FormStyles.Title}>Start Tracking Your Time</h1>
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
        Sign Up
      </button>
    </div>
  );
};

SignUp.propTypes = {
  createSession: PropTypes.func,
  displayError: PropTypes.func,
};

SignUp.defaultProps = {
  createSession: undefined,
  displayError: undefined,
};

const mapDispatchToProps = dispatch => ({
  createSession: user => dispatch(Actions.createSession(user)),
  displayError: error => dispatch(Actions.setError(error)),
});

export default connect(undefined, mapDispatchToProps)(SignUp);

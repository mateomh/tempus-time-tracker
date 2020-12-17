/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FormStyles from '../assets/stylesheets/form.module.css';
import * as ApiComms from '../modules/apicomms';
import * as Actions from '../actions/actions';

const SignIn = props => {
  const { displayError, createSession } = props;

  const history = useHistory();

  const callBack = async () => {
    const userName = document.getElementById('user-name');
    const user = await ApiComms.checkUserName(userName.value);

    if (user === undefined) {
      displayError('user does not exists');
    } else {
      createSession(user);

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
  displayError: PropTypes.func,
};

SignIn.defaultProps = {
  createSession: undefined,
  displayError: undefined,
};

const mapDispatchToProps = dispatch => ({
  createSession: user => dispatch(Actions.createSession(user)),
  displayError: error => dispatch(Actions.setError(error)),
});

export default connect(undefined, mapDispatchToProps)(SignIn);

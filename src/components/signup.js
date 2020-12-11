import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FormStyles from '../assets/form.module.css';
import * as ApiComms from '../modules/apicomms';
import * as Actions from '../actions/actions';

const SignUp = props => {
  const history = useHistory();

  const callBack = async () => {
    const userName = document.getElementById('user-name');
    if (userName.value === '') {
      console.log('User name empty');
      return null;
    }
    const response = await ApiComms.createUser(userName.value);
    console.log(response);
    if (response === undefined) {
      console.log('User name already exists');
    } else {
      props.createSession(response);
      history.push('/');
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
};

SignUp.defaultProps = {
  createSession: undefined,
};

const mapDispatchToProps = dispatch => ({
  createSession: user => dispatch(Actions.createSession(user)),
});

export default connect(undefined, mapDispatchToProps)(SignUp);

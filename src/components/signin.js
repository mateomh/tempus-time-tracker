/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FormStyles from '../assets/form.module.css';
import * as ApiComms from '../modules/apicomms';
import * as Actions from '../actions/actions';

const SignIn = props => {
  const history = useHistory();
  const callBack = async () => {
    const userName = document.getElementById('user-name');
    const user = await ApiComms.checkUserName(userName.value);
    console.log(props);
    if (user === undefined) {
      console.log('user does not exists');
    } else {
      props.createSession(user);
      history.push('/');
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
};

SignIn.defaultProps = {
  createSession: undefined,
};

const mapDispatchToProps = dispatch => ({
  createSession: user => dispatch(Actions.createSession(user)),
});

export default connect(undefined, mapDispatchToProps)(SignIn);

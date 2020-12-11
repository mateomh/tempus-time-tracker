import FormStyles from '../assets/form.module.css';
import * as ApiComms from '../modules/apicomms';

const SignIn = () => {
  const callBack = async () => {
    const userName = document.getElementById('user-name');
    const user = await ApiComms.checkUserName(userName.value);
    if (user === undefined) {
      console.log('user does not exists');
    } else {
      console.log('Welcome', user);
    }
    // console.log(user);
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

export default SignIn;

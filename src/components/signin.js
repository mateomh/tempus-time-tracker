import FormStyles from '../assets/form.module.css';

const SignIn = () => {
  const callBack = () => {
    console.log('sign in');
  };

  return (
    <div className={FormStyles.Form}>
      <h1 className={FormStyles.Title}>Keep Tracking Your Time</h1>
      <input
        className={FormStyles.Input}
        type="text"
        placeholder="Enter Your Name"
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

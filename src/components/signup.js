import FormStyles from '../assets/form.module.css';

const SignUp = () => {
  const callBack = () => {
    console.log('sign up');
  };

  return (
    <div className={FormStyles.Form}>
      <h1 className={FormStyles.Title}>Start Tracking Your Time</h1>
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
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;

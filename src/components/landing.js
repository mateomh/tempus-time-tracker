/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import LandingStyles from '../assets/landing.module.css';

const LandingPage = () => {
  return (
    <div className={LandingStyles.Main}>
      <h1 className={LandingStyles.Title}>Tempus</h1>
      <button
        type="button"
        className={`${LandingStyles.Button} ${LandingStyles.Green}`}
        onClick={() => <Link to="/signin" />}
      >
        Sign In
      </button>
      <button
        type="button"
        className={`${LandingStyles.Button} ${LandingStyles.Grey}`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default LandingPage;

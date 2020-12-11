/* eslint-disable react/no-string-refs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import LandingStyles from '../assets/landing.module.css';

const LandingPage = props => {
  return (
    <div className={LandingStyles.Main}>
      <h1 className={LandingStyles.Title}>Tempus</h1>
      <Link
        to="/signin"
        className={`${LandingStyles.Button} ${LandingStyles.Green}`}
        onClick={() => console.log('click')}
      >
        Sign Up
      </Link>

      <Link
        to="/signup"
        className={`${LandingStyles.Button} ${LandingStyles.Grey}`}
      >
        Sign Up
      </Link>
    </div>
  );
};

export default LandingPage;

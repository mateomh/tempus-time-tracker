/* eslint-disable react/no-string-refs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import LandingStyles from '../assets/stylesheets/landing.module.css';

const LandingPage = props => {
  return (
    <div className={LandingStyles.Main}>
      <h1
        className={LandingStyles.Title}
      >
        Tempus
      </h1>
    </div>
  );
};

export default LandingPage;

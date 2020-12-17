/* eslint-disable no-unused-vars */
import { useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavbarStyles from '../assets/stylesheets/navbar.module.css';

const WelcomeBar = () => {
  const history = useHistory();

  return (
    <div className={NavbarStyles.Navbar}>
      <button
        type="button"
        className={NavbarStyles.Item}
        onClick={() => history.push('/signin')}
      >
        Sign In
      </button>
      <button
        type="button"
        className={`${NavbarStyles.Item}`}
        onClick={() => history.push('/')}
      >
        Home
      </button>
      <button
        type="button"
        className={`${NavbarStyles.Item}`}
        onClick={() => history.push('/signup')}
      >
        Sign Up
      </button>
    </div>
  );
};

export default WelcomeBar;

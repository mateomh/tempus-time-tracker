/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavbarStyles from '../assets/stylesheets/navbar.module.css';
import * as Actions from '../actions/actions';

const NavBar = props => {
  const { user, clearUser } = props;

  const handleClick = event => {
    const action = event.target.getAttribute('data-action');
    switch (action) {
      case 'logout':
        clearUser();
        break;
      default:
        break;
    }
  };

  return (
    <div className={NavbarStyles.Navbar}>
      <button
        type="button"
        className={NavbarStyles.Item}
        onClick={handleClick}
        data-action="categories"
      >
        Categories
      </button>
      <button
        type="button"
        className={`${NavbarStyles.Item} ${NavbarStyles.Name}`}
        onClick={handleClick}
        data-action="user"
      >
        {user.name}
      </button>
      <button
        type="button"
        className={NavbarStyles.Item}
        onClick={handleClick}
        data-action="logout"
      >
        Logout
      </button>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.objectOf(Object),
  clearUser: PropTypes.func,
};

NavBar.defaultProps = {
  user: undefined,
  clearUser: undefined,
};

const mapStateToProps = state => ({
  user: state.sessionUser,
});

const mapDispatchToProps = dispatch => ({
  clearUser: () => dispatch(Actions.createSession({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import NavbarStyles from '../assets/stylesheets/navbar.module.css';
import * as Actions from '../actions/actions';

const NavBar = props => {
  const {
    user,
    clearUser,
    clearTasks,
    clearFilter,
    clearSession,
  } = props;

  const history = useHistory();

  const handleClick = event => {
    const action = event.target.getAttribute('data-action');
    switch (action) {
      case 'logout':
        clearUser();
        clearTasks();
        clearFilter();
        clearSession();
        history.push('/');
        break;
      case 'categories':
        history.push('/categories');
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
  clearTasks: PropTypes.func,
  clearFilter: PropTypes.func,
  clearSession: PropTypes.func,
};

NavBar.defaultProps = {
  user: undefined,
  clearUser: undefined,
  clearTasks: undefined,
  clearFilter: undefined,
  clearSession: undefined,
};

const mapStateToProps = state => ({
  user: state.sessionUser,
});

const mapDispatchToProps = dispatch => ({
  clearUser: () => dispatch(Actions.createSession({})),
  clearTasks: () => dispatch(Actions.clearTasks()),
  clearFilter: () => dispatch(Actions.changeFilter({})),
  clearSession: () => dispatch(Actions.destroySession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

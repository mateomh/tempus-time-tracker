/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import DisplayStyles from '../assets/stylesheets/totaldisplay.module.css';

const TotalDisplay = props => {
  const { user, filter } = props;
  const history = useHistory();

  if (Object.keys(user).length === 0) {
    history.push('/');
  }

  return (
    <div className={DisplayStyles.Display}>
      <p className={DisplayStyles.Text}>
        {user.name}
        &rsquo;s&nbsp;
        total time for&nbsp;
        {filter.name === undefined ? 'All' : filter.name}
        &nbsp;categories
      </p>
      <p className={DisplayStyles.Number}>1169 hours</p>
    </div>
  );
};

TotalDisplay.propTypes = {
  user: PropTypes.objectOf(Object),
  filter: PropTypes.objectOf(Object),
};

TotalDisplay.defaultProps = {
  user: undefined,
  filter: undefined,
};

const mapStateToProps = state => (
  {
    user: state.sessionUser,
    filter: state.filter,
  }
);

export default connect(mapStateToProps)(TotalDisplay);

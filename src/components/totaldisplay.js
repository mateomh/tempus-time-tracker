import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayStyles from '../assets/stylesheets/totaldisplay.module.css';

const TotalDisplay = props => {
  const { user, filter, total } = props;

  return (
    <div className={DisplayStyles.Display}>
      <p className={DisplayStyles.Text}>
        {user.name}
        &rsquo;s&nbsp;
        total time for&nbsp;
        {filter.name === undefined ? 'All' : filter.name}
        &nbsp;categories
      </p>
      <p className={DisplayStyles.Number}>
        {total}
        &nbsp;hours
      </p>
    </div>
  );
};

TotalDisplay.propTypes = {
  user: PropTypes.objectOf(Object),
  filter: PropTypes.objectOf(Object),
  total: PropTypes.number,
};

TotalDisplay.defaultProps = {
  user: undefined,
  filter: undefined,
  total: 0,
};

const mapStateToProps = state => (
  {
    user: state.sessionUser,
    filter: state.filter,
    total: state.total,
  }
);

export default connect(mapStateToProps)(TotalDisplay);

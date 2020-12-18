import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashStyles from '../assets/stylesheets/flashnotice.module.css';
import * as Actions from '../actions/actions';

const FlashNotice = props => {
  const { error, clearError } = props;

  useEffect(() => {
    if (error !== '') {
      const notice = document.getElementById('notice');
      notice.classList.remove(FlashStyles.Hide);
      setTimeout(() => {
        const notice = document.getElementById('notice');
        notice.classList.add(FlashStyles.Hide);
        clearError();
      }, 3000);
    }
  });

  return (
    <div id="notice" className={`${FlashStyles.Notice} ${FlashStyles.Hide}`}>
      <p>{error}</p>
    </div>
  );
};

FlashNotice.propTypes = {
  error: PropTypes.string,
  clearError: PropTypes.func,
};

FlashNotice.defaultProps = {
  error: '',
  clearError: undefined,
};

const mapStateToProps = state => (
  {
    error: state.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    clearError: () => dispatch(Actions.clearError()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FlashNotice);

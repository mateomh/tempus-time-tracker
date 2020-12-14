/* eslint-disable react/no-unused-prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CategoryStyles from '../assets/stylesheets/categorygrid.module.css';
import * as Actions from '../actions/actions';

const CategoryGrid = props => {
  const {
    categories,
    changeFilter,
    setTotal,
    tasks,
  } = props;
  const history = useHistory();

  const handleClick = event => {
    const { id } = event.target;
    const category = categories[id - 1];
    changeFilter(category);
    history.push('/view');
  };

  const times = tasks.map(task => task.time);
  let total;
  if (times.length !== 0) {
    total = times.reduce((acum, value) => acum + value);
  } else {
    total = 0;
  }

  setTotal(total);

  changeFilter({});

  return (
    <div className={CategoryStyles.Container}>
      {categories.map(category => (
        <button
          type="button"
          key={category.id}
          id={category.id}
          className={CategoryStyles.Item}
          onClick={handleClick}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

CategoryGrid.propTypes = {
  changeFilter: PropTypes.func,
  categories: PropTypes.arrayOf(Object),
  tasks: PropTypes.arrayOf(Object),
  setTotal: PropTypes.func,
};

CategoryGrid.defaultProps = {
  changeFilter: undefined,
  categories: [],
  tasks: [],
  setTotal: undefined,
};

const mapStateToProps = state => ({
  categories: state.categories,
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(Actions.changeFilter(category)),
  setTotal: total => dispatch(Actions.updateTotalHours(total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryGrid);

/* eslint-disable react/no-unused-prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryStyles from '../assets/categorygrid.module.css';
import * as Actions from '../actions/actions';

const CategoryGrid = props => {
  const { categories, changeFilter } = props;

  const handleClick = event => {
    const { id } = event.target;
    console.log(id);
    const category = categories[id - 1];
    console.log(category);
    changeFilter(category);
  };

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
};

CategoryGrid.defaultProps = {
  changeFilter: undefined,
  categories: [],
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(Actions.changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryGrid);

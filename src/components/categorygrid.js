/* eslint-disable react/no-unused-prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CategoryStyles from '../assets/stylesheets/categorygrid.module.css';
import * as Actions from '../actions/actions';
import * as ApiComms from '../modules/apicomms';

const CategoryGrid = props => {
  const {
    categories,
    tasks,
    user,
    changeFilter,
    setTotal,
    addCategory,
    addTask,
  } = props;
  const history = useHistory();
  let total;

  useEffect(async () => {
    const categories = await ApiComms.getCategories();
    categories.map(category => addCategory(category));

    const apiTasks = await ApiComms.getTasks(user.id);

    if (apiTasks !== undefined) {
      apiTasks.map(task => addTask(task));
    }
  }, []);

  const handleClick = event => {
    const { id } = event.target;
    const category = categories[id - 1];
    changeFilter(category);
    history.push('/view');
  };

  const times = tasks.map(task => task.time);

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
  categories: PropTypes.arrayOf(Object),
  tasks: PropTypes.arrayOf(Object),
  user: PropTypes.objectOf(Object),
  changeFilter: PropTypes.func,
  setTotal: PropTypes.func,
  addTask: PropTypes.func,
  addCategory: PropTypes.func,
};

CategoryGrid.defaultProps = {
  categories: [],
  tasks: [],
  user: {},
  changeFilter: undefined,
  setTotal: undefined,
  addCategory: undefined,
  addTask: undefined,
};

const mapStateToProps = state => ({
  categories: state.categories,
  tasks: state.tasks,
  user: state.sessionUser,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(Actions.changeFilter(category)),
  setTotal: total => dispatch(Actions.updateTotalHours(total)),
  addCategory: category => dispatch(Actions.addCategory(category)),
  addTask: task => dispatch(Actions.addTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryGrid);

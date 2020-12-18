const createSession = user => (
  {
    type: 'CREATE_SESSION',
    payload: user,
  }
);

const destroySession = () => (
  {
    type: 'DESTROY_SESSION',
  }
);

const changeFilter = category => (
  {
    type: 'CHANGE_FILTER',
    payload: category,
  }
);

const addTask = task => (
  {
    type: 'ADD_TASK',
    payload: task,
  }
);

const addCategory = category => (
  {
    type: 'ADD_CATEGORY_TO_STORE',
    payload: category,
  }
);

const updateTotalHours = value => (
  {
    type: 'UPDATE_TOTAL',
    payload: value,
  }
);

const clearTasks = () => (
  {
    type: 'CLEAR_TASKS',
  }
);

const setError = errormsg => (
  {
    type: 'SET_ERROR',
    payload: errormsg,
  }
);

const clearError = () => (
  {
    type: 'CLEAR_ERROR',
  }
);

export {
  createSession,
  destroySession,
  changeFilter,
  addTask,
  addCategory,
  updateTotalHours,
  clearTasks,
  setError,
  clearError,
};

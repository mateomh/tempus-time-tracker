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

export {
  createSession,
  destroySession,
  changeFilter,
  addTask,
  addCategory,
};

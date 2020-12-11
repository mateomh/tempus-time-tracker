const createSession = user => (
  {
    type: 'CREATE_SESSION',
    payload: user,
  }
);

const changeCategory = category => (
  {
    type: 'CHANGE_CATEGORY',
    payload: category,
  }
);

const addTask = task => (
  {
    type: 'ADD_TASK',
    payload: task,
  }
);

export {
  createSession,
  changeCategory,
  addTask,
};

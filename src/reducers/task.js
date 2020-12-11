const taskReducer = (state = [], action) => {
  const { type, payload: task } = action;
  switch (type) {
    case 'ADD_TASK':
      return state.concat(task);
    default:
      return state;
  }
};

export default taskReducer;

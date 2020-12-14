const taskReducer = (state = [], action) => {
  const { type, payload: task } = action;
  switch (type) {
    case 'ADD_TASK':
      if (state.find(t => t.id === task.id)) {
        return state;
      }
      return state.concat(task);
    default:
      return state;
  }
};

export default taskReducer;

const totalReducer = (state = 0, action) => {
  const { type, payload: total } = action;

  switch (type) {
    case 'UPDATE_TOTAL':
      return total;
    default:
      return state;
  }
};

export default totalReducer;

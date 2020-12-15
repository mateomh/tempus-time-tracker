const filterReducer = (state = {}, action) => {
  const { type, payload: category } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return category;
    default:
      return state;
  }
};

export default filterReducer;

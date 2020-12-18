const errorReducer = (state = '', action) => {
  const { type, payload: errormsg } = action;

  switch (type) {
    case 'CLEAR_ERROR':
      return '';
    case 'SET_ERROR':
      return errormsg;
    default:
      return state;
  }
};

export default errorReducer;

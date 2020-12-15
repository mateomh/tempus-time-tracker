const sessionReducer = (state = {}, action) => {
  const { type, payload: user } = action;

  switch (type) {
    case 'CREATE_SESSION':
      return user;
    case 'DESTROY_SESSION':
      return {};
    default:
      return state;
  }
};

export default sessionReducer;

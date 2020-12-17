const sessionReducer = (state = {}, action) => {
  const { type, payload: user } = action;

  switch (type) {
    case 'CREATE_SESSION':
      localStorage.setItem(
        'sessionUser',
        JSON.stringify(user),
      );
      return user;
    case 'DESTROY_SESSION':
      localStorage.removeItem('sessionUser');
      return {};
    default:
      return state;
  }
};

export default sessionReducer;

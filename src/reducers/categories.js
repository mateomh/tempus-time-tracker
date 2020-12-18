const categoriesReducer = (state = [], action) => {
  const { type, payload: category } = action;

  switch (type) {
    case 'ADD_CATEGORY_TO_STORE':
      if (state.find(c => c.id === category.id)) {
        return state;
      }
      return state.concat(category);
    default:
      return state;
  }
};

export default categoriesReducer;

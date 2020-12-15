import categoriesReducer from '../../reducers/categories';

describe('Categories Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = categoriesReducer(mockState, mockAction);
    expect(state).toBeDefined();
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'My Category';
      const mockAction = { type: 'any' };
      const state = categoriesReducer(mockState, mockAction);
      expect(state).toBe('My Category');
    },
  );

  it(
    '3. Checks the new state is returned when a valid action is provided',
    () => {
      const mockState = undefined;
      const mockAction = {
        type: 'ADD_CATEGORY_TO_STORE',
        payload: 'My Category',
      };
      const state = categoriesReducer(mockState, mockAction);
      expect(state[0]).toBe('My Category');
    },
  );

  it(
    '4. Checks a repeated value is not added to the state',
    () => {
      const mockState = [{ name: 'My Category', id: 1 }];
      const mockAction = {
        type: 'ADD_CATEGORY_TO_STORE',
        payload: { name: 'My Category', id: 1 },
      };
      const state = categoriesReducer(mockState, mockAction);
      expect(state[1]).toBeUndefined();
    },
  );
  
  it(
    '5. Checks a non-repeated value is added to the state',
    () => {
      const mockState = [{ name: 'My Categorys', id: 1 }];
      const mockAction = {
        type: 'ADD_CATEGORY_TO_STORE',
        payload: { name: 'My Category', id: 2 },
      };
      const state = categoriesReducer(mockState, mockAction);
      expect(state[1].name).toBe('My Category');
    },
  );
});

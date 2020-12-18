import filterReducer from '../../reducers/filter';

describe('Filter Reducer', () => {
  it(
    '1. Checks the default state is returned', () => {
      const mockState = undefined;
      const mockAction = { type: 'any' };
      const state = filterReducer(mockState, mockAction);
      expect(state).toBeInstanceOf(Object);
      expect(Object.keys(state).length).toEqual(0);
    },
  );

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'My Filter';
      const mockAction = { type: 'any' };
      const state = filterReducer(mockState, mockAction);
      expect(state).toBe('My Filter');
    },
  );

  it(
    '3. Checks the change filter action, should return and empty string',
    () => {
      const mockState = undefined;
      const mockAction = {
        type: 'CHANGE_FILTER',
        payload: 'My Filter',
      };
      const state = filterReducer(mockState, mockAction);
      expect(state).toBe('My Filter');
    },
  );
});

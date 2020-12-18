import totalReducer from '../../reducers/total';

describe('Total Reducer', () => {
  it(
    '1. Checks the default state is returned', () => {
      const mockState = undefined;
      const mockAction = { type: 'any' };
      const state = totalReducer(mockState, mockAction);
      expect(state).toEqual(0);
    },
  );

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'My Total';
      const mockAction = { type: 'any' };
      const state = totalReducer(mockState, mockAction);
      expect(state).toBe('My Total');
    },
  );

  it(
    '3. Checks the update total action, should return the value in the payload',
    () => {
      const mockState = undefined;
      const mockAction = {
        type: 'UPDATE_TOTAL',
        payload: 123456789,
      };
      const state = totalReducer(mockState, mockAction);
      expect(state).toBe(123456789);
    },
  );
});

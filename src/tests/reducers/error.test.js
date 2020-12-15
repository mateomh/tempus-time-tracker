import errorReducer from '../../reducers/error';

describe('Error Reducer', () => {
  it(
    '1. Checks the default state is returned', () => {
      const mockState = undefined;
      const mockAction = { type: 'any' };
      const state = errorReducer(mockState, mockAction);
      expect(state).toBe('');
    },
  );

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'My Filter';
      const mockAction = { type: 'any' };
      const state = errorReducer(mockState, mockAction);
      expect(state).toBe('My Filter');
    },
  );

  it(
    '3. Checks the clear error action, should return and empty string',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'CLEAR_ERROR' };
      const state = errorReducer(mockState, mockAction);
      expect(state).toBe('');
    },
  );

  it(
    '4. Checks the set error action, should return the error message provided',
    () => {
      const mockState = undefined;
      const mockAction = {
        type: 'SET_ERROR',
        payload: 'this is my message',
      };
      const state = errorReducer(mockState, mockAction);
      expect(state).toBe('this is my message');
    },
  );
});

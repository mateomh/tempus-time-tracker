import sessionReducer from '../../reducers/session';

describe('Session Reducer', () => {
  it(
    '1. Checks the default state is returned', () => {
      const mockState = undefined;
      const mockAction = { type: 'any' };
      const state = sessionReducer(mockState, mockAction);
      expect(state).toBeInstanceOf(Object);
      expect(Object.keys(state).length).toEqual(0);
    },
  );

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'My Session';
      const mockAction = { type: 'any' };
      const state = sessionReducer(mockState, mockAction);
      expect(state).toBe('My Session');
    },
  );

  it(
    '3. Checks the create session action, should return the provided payload',
    () => {
      const mockState = undefined;
      const mockAction = {
        type: 'CREATE_SESSION',
        payload: 'My Session',
      };
      const state = sessionReducer(mockState, mockAction);
      expect(state).toBe('My Session');
    },
  );

  it(
    '4. Checks the destroy session action, should return an empty object',
    () => {
      const mockState = undefined;
      const mockAction = {
        type: 'DESTROY_SESSION',
      };
      const state = sessionReducer(mockState, mockAction);
      expect(state).toBeInstanceOf(Object);
      expect(Object.keys(state).length).toEqual(0);
    },
  );
});

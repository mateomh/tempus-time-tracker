import taskReducer from '../../reducers/task';

describe('Task Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = taskReducer(mockState, mockAction);
    expect(state).toBeInstanceOf(Array);
    expect(state.length).toEqual(0);
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'My Task';
      const mockAction = { type: 'any' };
      const state = taskReducer(mockState, mockAction);
      expect(state).toBe('My Task');
    },
  );

  it(
    '3. Checks the clear tasks action, should return an empty array',
    () => {
      const mockState = 'My Task';
      const mockAction = {
        type: 'CLEAR_TASKS',
      };
      const state = taskReducer(mockState, mockAction);
      expect(state).toBeInstanceOf(Array);
      expect(state.length).toEqual(0);
    },
  );

  it(
    '4. Checks a repeated value is not added to the state',
    () => {
      const mockState = [{ desc: 'My Task', id: 1 }];
      const mockAction = {
        type: 'ADD_TASK',
        payload: { desc: 'My Task', id: 1 },
      };
      const state = taskReducer(mockState, mockAction);
      expect(state[1]).toBeUndefined();
    },
  );

  it(
    '5. Checks a non-repeated value is added to the state',
    () => {
      const mockState = [{ desc: 'My Tasksksks', id: 1 }];
      const mockAction = {
        type: 'ADD_TASK',
        payload: { desc: 'My Task', id: 2 },
      };
      const state = taskReducer(mockState, mockAction);
      expect(state[1].desc).toBe('My Task');
      expect(state[0].desc).toBe('My Tasksksks');
    },
  );
});

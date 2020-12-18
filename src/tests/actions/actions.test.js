import * as Actions from '../../actions/actions';

describe('Reducer Actions', () => {
  it(
    '1. Checks the createSession action retruns the provided user',
    () => {
      const { type, payload } = Actions.createSession('Testy');
      expect(payload).toBe('Testy');
      expect(type).toBe('CREATE_SESSION');
    },
  );

  it(
    '2. Checks the destroySession action retruns just the type',
    () => {
      const { type, payload } = Actions.destroySession();
      expect(payload).toBeUndefined();
      expect(type).toBe('DESTROY_SESSION');
    },
  );

  it(
    '3. Checks the changeFilter action retruns the provided filter',
    () => {
      const { type, payload } = Actions.changeFilter('Testy');
      expect(payload).toBe('Testy');
      expect(type).toBe('CHANGE_FILTER');
    },
  );

  it(
    '4. Checks the addTask action retruns the provided task',
    () => {
      const { type, payload } = Actions.addTask('Testy');
      expect(payload).toBe('Testy');
      expect(type).toBe('ADD_TASK');
    },
  );

  it(
    '5. Checks the addCategory action retruns the provided category',
    () => {
      const { type, payload } = Actions.addCategory('Testy');
      expect(payload).toBe('Testy');
      expect(type).toBe('ADD_CATEGORY_TO_STORE');
    },
  );

  it(
    '6. Checks the updateTotalHours action retruns the provided hours',
    () => {
      const { type, payload } = Actions.updateTotalHours('Testy');
      expect(payload).toBe('Testy');
      expect(type).toBe('UPDATE_TOTAL');
    },
  );

  it(
    '7. Checks the clearTasks action retruns just the type',
    () => {
      const { type, payload } = Actions.clearTasks();
      expect(payload).toBeUndefined();
      expect(type).toBe('CLEAR_TASKS');
    },
  );

  it(
    '8. Checks the setError action retruns the provided error',
    () => {
      const { type, payload } = Actions.setError('Testy');
      expect(payload).toBe('Testy');
      expect(type).toBe('SET_ERROR');
    },
  );

  it(
    '9. Checks the clearError action retruns just the type',
    () => {
      const { type, payload } = Actions.clearError();
      expect(payload).toBeUndefined();
      expect(type).toBe('CLEAR_ERROR');
    },
  );
});

import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TaskList from '../../components/tasklist';
import rootReducer from '../../reducers/root';

describe('TaskList Component', () => {
  let mockStore;

  beforeEach(() => {
    const tasks = [
      {
        desc: 'Test 1',
        time: 123,
        created_at: 1,
        id: 1,
      },
      {
        desc: 'Test 2',
        time: 456,
        created_at: 2,
        id: 2,
      },
    ];

    const mockState = {
      sessionUser: {},
      filter: {},
      categories: [],
      tasks,
      total: 0,
      error: '',
    };

    mockStore = createStore(rootReducer, mockState);
  });

  it(
    '1. Renders correctly',
    () => {
      render(
        <Provider store={mockStore}>
          <TaskList />
        </Provider>,
      );
      let item = screen.getByText('Test 1');
      expect(item).toBeDefined();
      item = screen.getByText('Test 2');
      expect(item).toBeDefined();
      item = screen.getByText('123');
      expect(item).toBeDefined();
      item = screen.getByText('456');
      expect(item).toBeDefined();
    },
  );

  it(
    '2. Checks it renders correctly against the snapshot',
    () => {
      const tree = renderer
        .create(
          <Provider store={mockStore}>
            <TaskList />
          </Provider>,
        ).toJSON();
      expect(tree).toMatchSnapshot();
    },
  );
});

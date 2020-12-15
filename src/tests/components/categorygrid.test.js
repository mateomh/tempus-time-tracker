import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CategoryGrid from '../../components/categorygrid';
import rootReducer from '../../reducers/root';

describe('CategoryGrid Component', () => {
  let mockStore;

  beforeEach(() => {
    const categories = [
      {
        name: 'Test 1',
        id: 123,
      },
      {
        name: 'Test 2',
        id: 456,
      },
    ];

    const mockState = {
      sessionUser: {},
      filter: {},
      categories,
      tasks: [],
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
          <CategoryGrid />
        </Provider>,
      );
      let item = screen.getByText('Test 1');
      expect(item).toBeDefined();
      item = screen.getByText('Test 2');
      expect(item).toBeDefined();
    },
  );

  it(
    '2. Checks it renders correctly against the snapshot',
    () => {
      const tree = renderer
        .create(
          <Provider store={mockStore}>
            <CategoryGrid />
          </Provider>,
        ).toJSON();
      expect(tree).toMatchSnapshot();
    },
  );
});

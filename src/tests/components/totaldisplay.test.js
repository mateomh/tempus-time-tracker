import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TotalDisplay from '../../components/totaldisplay';
import rootReducer from '../../reducers/root';

describe('TotalDisplay Component', () => {
  let mockStore;

  beforeEach(() => {
    const user = {
      name: 'Testy',
    };

    const mockState = {
      sessionUser: user,
      filter: {},
      categories: [],
      tasks: [],
      total: 123456987,
      error: '',
    };

    mockStore = createStore(rootReducer, mockState);
  });

  it(
    '1. Renders correctly',
    () => {
      render(
        <Provider store={mockStore}>
          <TotalDisplay />
        </Provider>,
      );
      let item = screen.getByText(/Testy/);
      expect(item).toBeDefined();
      item = screen.getByText(/[123456987]/);
      expect(item).toBeDefined();
    },
  );

  it(
    '2. Checks it renders correctly against the snapshot',
    () => {
      const tree = renderer
        .create(
          <Provider store={mockStore}>
            <TotalDisplay />
          </Provider>,
        ).toJSON();
      expect(tree).toMatchSnapshot();
    },
  );
});

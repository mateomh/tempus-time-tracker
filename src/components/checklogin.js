import { useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Actions from '../actions/actions';

const CheckLogin = () => {
  const store = useStore();
  let { sessionUser: user } = store.getState();
  const history = useHistory();

  if (Object.keys(user).length === 0) {
    user = JSON.parse(localStorage.getItem('sessionUser'));
    if (user !== null) {
      store.dispatch(Actions.createSession(user));
      history.push('/categories');
    } else {
      history.push('/');
    }
  }

  return null;
};

export default CheckLogin;

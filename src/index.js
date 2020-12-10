import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {
  // saveTask,
  // getTasks,
  // checkUserName,
  createUser,
  getCategories,
  createCategory,
} from './modules/apicomms';

// getTasks().catch(console.log('ERROR'));
// saveTask().catch(e => console.log('errrrrrrrroooooooooosssss', e));
// checkUserName('pancho').catch(e => console.log(e));
createUser('pancho', './src/assets/1.png').catch(e => console.log(e));
getCategories();
createCategory('Work', 'pancho').catch(e => console.log(e));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

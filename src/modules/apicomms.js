// const apiUrl = 'https://tempus-mm-api.herokuapp.com/';
const apiUrl = 'http://localhost:5000/';

const errorHandle = msg => {
  throw Error(msg);
};

const getTasks = async () => {
  const taskUrl = apiUrl.concat('tasks/');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
  };

  const data = await fetch(taskUrl, options);
  const tasks = await data.json();
  return tasks;
};

const saveTask = async () => {
  const taskUrl = apiUrl.concat('tasks/');

  const info = {
    desc: 'Mateo',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(info),
    mode: 'cors',
  };

  const resp = await fetch(taskUrl, options);

  if (!resp.ok) {
    errorHandle(resp.statusText);
  }

  const task = await resp.json();

  return task;
};

const checkUserName = async name => {
  const userUrl = apiUrl.concat(`users/${name}`);

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
  };

  const resp = await fetch(userUrl, options).catch(() => console.log('USER ERRORR'));
  // console.log('user response', resp);
  let user;
  if (resp.ok) {
    [user] = await resp.json();
  } else {
    user = undefined;
  }

  // if (user === undefined) {
  //   errorHandle('User does not exist');
  // }
  // console.log(user);

  return user;
};

const createUser = async (name, avatarurl = null) => {
  const userUrl = apiUrl.concat('users/');

  const user = {
    name,
    avatarurl,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
    body: JSON.stringify(user),
  };

  const resp = await fetch(userUrl, options).catch(() => console.log('USER ERRORR'));

  let data;
  if (resp.ok) {
    data = await resp.json();
  } else {
    data = undefined;
  }

  return data;
};

const getCategories = async () => {
  const categoriesUrl = apiUrl.concat('categories/');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
  };

  const data = await fetch(categoriesUrl, options);
  const categories = await data.json();

  return categories;
};

const createCategory = async (name, logourl) => {
  const categoryUrl = apiUrl.concat('categories/');

  let namePost = name.toLowerCase();
  namePost = namePost.charAt(0).toUpperCase() + namePost.slice(1);

  const category = {
    name: namePost,
    logourl,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    mode: 'cors',
    body: JSON.stringify(category),
  };

  const resp = await fetch(categoryUrl, options).catch(() => console.log('Category ERRORR'));

  if (!resp.ok) {
    errorHandle('Category already exists');
  }

  const data = await resp.json();

  return data;
};

export {
  getTasks,
  saveTask,
  checkUserName,
  createUser,
  getCategories,
  createCategory,
};

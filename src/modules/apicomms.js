// const apiUrl = 'https://tempus-mm-api.herokuapp.com/';
const apiUrl = 'http://localhost:5000/';

const errorHandle = msg => {
  throw Error(msg);
};

const getTasks = async token => {
  const taskUrl = apiUrl.concat('tasks/');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      token,
    },
    mode: 'cors',
  };

  const data = await fetch(taskUrl, options);
  let tasks;
  if (data.ok) {
    tasks = await data.json();
  } else {
    tasks = undefined;
  }

  return tasks;
};

const getCategories = async token => {
  const categoriesUrl = apiUrl.concat('categories/');

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      token,
    },
    mode: 'cors',
  };

  const data = await fetch(categoriesUrl, options);
  const categories = await data.json();

  return categories;
};

const saveTask = async (task, token) => {
  const taskUrl = apiUrl.concat('tasks/');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      token,
    },
    body: JSON.stringify(task),
    mode: 'cors',
  };

  const resp = await fetch(taskUrl, options);

  let response;
  if (resp.ok) {
    response = await resp.json();
  } else {
    response = undefined;
  }

  return response;
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

  let user;
  if (resp.ok) {
    user = await resp.json();
    delete user.created_at;
    delete user.updated_at;
  } else {
    user = undefined;
  }

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

const createCategory = async (name, logourl, token) => {
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
      token,
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

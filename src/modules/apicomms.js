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
  console.log(tasks);
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
  console.log(task);
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

  const [user] = await resp.json();

  if (user === undefined) {
    errorHandle('User does not exist');
  }

  return user;
};

export {
  getTasks,
  saveTask,
};

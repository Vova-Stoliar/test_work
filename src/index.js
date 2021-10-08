import './App.scss';
import { generateTable } from './table/table';
import { addUsers } from './addUsers/addUsers';
import { usersStorage } from './usersStorage/userStorage';

const usersFromServer = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const usersServer = await response.json();

  generateTable(usersStorage(usersServer));

  addUsers(usersServer);
};

usersFromServer();

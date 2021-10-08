import { tbody } from './body';
import { tableHead, thead } from './head';
import { generateModal } from '../modal/modal';
import { generateUsers } from '../generateTable/generateTable';
import { sortUsers } from '../sortUsers/sortUsers';

const list = document.getElementById('root');

const table = document.createElement('table');

table.className = 'table table-hover table_users';
table.id = 'tableId';

list.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
tableHead();

export const generateTable = (usersStorage) => {
  tbody.addEventListener(
    'click', (event) => {
      generateModal(usersStorage, event.target.title);
    },
  );

  thead.addEventListener(
    'click', (event) => {
      sortUsers(usersStorage, event.target.title);
      const users = sortUsers(usersStorage, event.target.title);

      tbody.innerHTML = '';
      generateUsers(users);
    },
  );

  generateUsers(usersStorage);
};

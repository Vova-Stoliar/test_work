import { usersStorage } from '../usersStorage/userStorage';
import { tbody } from '../table/body';
import { generateUsers } from '../generateTable/generateTable';

const list = document.getElementById('root');
const modal = document.createElement('div');
const modalDialog = document.createElement('div');
const modalContent = document.createElement('div');
const modalHeader = document.createElement('div');
const modalBody = document.createElement('div');
const modalFooter = document.createElement('div');
const article = document.createElement('article');
const modalTittle = document.createElement('h5');
const deleteButton = document.createElement('button');

deleteButton.innerHTML = 'Delete user';

list.appendChild(modal);
modal.appendChild(modalDialog);
modalDialog.appendChild(modalContent);
modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);
modalContent.appendChild(modalFooter);
modalBody.appendChild(article);
modalHeader.appendChild(modalTittle);
modalFooter.prepend(deleteButton);

modalFooter.insertAdjacentHTML('afterbegin', '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>');

Object.assign(modal, {
  className: 'modal fade',
  id: 'myModal',
  tabindex: '-1',
  'aria-labelledby': 'exampleModalLabel',
  'aria-hidden': 'true',
});

Object.assign(deleteButton, {
  type: 'button',
  className: 'btn btn-secondary',
});

modalDialog.setAttribute('class', 'modal-dialog');
modalContent.setAttribute('class', 'modal-content');
modalHeader.setAttribute('class', 'modal-header');
modalBody.setAttribute('class', 'modal-body');
modalFooter.setAttribute('class', 'modal-footer');

export const generateModal = (users, id) => {
  const selectedUser = users[id - 1];

  if (!selectedUser) {
    return;
  }

  const { address, phone } = selectedUser;
  const { street, city, zipcode } = address;

  deleteButton.addEventListener('click', () => {
    tbody.innerHTML = '';
    generateUsers(usersStorage(users, {}, id));
  });

  modalTittle.innerHTML = `<h5 class="modal-title" id="myInput">${selectedUser.name}</h5>`;

  article.innerHTML = `
  <p>City: ${city}</p>
  <p>Street: ${street}</p>
  <p>Phone: ${phone}</p>
  <p>Zipcode: ${zipcode}</p>
  `;
};

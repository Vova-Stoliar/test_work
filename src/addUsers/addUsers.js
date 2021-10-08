/* eslint-disable no-console */
import { tbody } from '../table/body';
import { usersStorage } from '../usersStorage/userStorage';
import { generateTable } from '../table/table';

const form = document.getElementById('form_add-users');

const buttonWrapper = document.createElement('div');

const button = document.createElement('button');

button.id = 'add-user-button';

button.innerHTML = 'Add user';
buttonWrapper.className = 'col-auto';

Object.assign(button, {
  type: 'submit',
  className: 'btn btn-primary mb-3',
});

form.append(buttonWrapper);
buttonWrapper.appendChild(button);

export const addUsers = (users = []) => {
  const newUser = {
    name: '',
    username: '',
    email: '',
    website: '',
    id: 1,
    phone: '',
    address: {
      street: '',
      city: '',
      zipcode: '',
    },
  };

  const formItems = ['name', 'username', 'email', 'website', 'street', 'city', 'zipcode', 'phone'];

  button.addEventListener('click', (event) => {
    event.preventDefault();
    tbody.innerHTML = '';
    const newUserId = usersStorage(users)[usersStorage(users).length - 1].id;

    newUser.id = newUserId + 1;

    generateTable(usersStorage(users, { ...newUser }));
  });

  formItems.forEach(formItem => {
    const input = document.createElement('input');
    const label = document.createElement('label');
    const div = document.createElement('div');

    input.addEventListener(
      'change', (event) => {
        const { value, name } = event.target;

        if (name in newUser) {
          newUser[name] = value;
        } else if (name in newUser.address) {
          newUser.address[name] = value;
        }
      },
    );

    div.className = 'mb-3 row';

    Object.assign(input, {
      type: `${formItem === 'email' ? 'email' : 'text'}`,
      name: `${formItem}`,
      id: `label-${formItem}`,
      className: 'form-control',
      value: `${newUser[formItem] !== undefined ? newUser[formItem] : newUser.address[formItem]}`,
    });
    input.setAttribute('required', '');

    Object.assign(label, {
      for: `label-${formItem}`,
      name: { formItem },
      className: 'col-sm-2 col-form-label',
    });

    label.innerHTML = `${formItem}`;

    form.append(div);
    div.appendChild(label);
    div.appendChild(input);
  });

  form.appendChild(buttonWrapper);
  buttonWrapper.appendChild(button);
};

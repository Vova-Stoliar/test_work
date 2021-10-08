import { tableBody } from '../table/body';

export const generateUsers = (users) => {
  return users.forEach((user) => {
    tableBody(user);
  });
};

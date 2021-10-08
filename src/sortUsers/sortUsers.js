export const sortUsers = (users, sortByValue) => {
  return users.sort((a, b) => a[sortByValue].localeCompare(b[sortByValue]));
};

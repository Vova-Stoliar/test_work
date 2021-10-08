let usersAfterDelete = [];

export const usersStorage = (users = [], newUser = {}, userId) => {
  if (!usersAfterDelete.length) {
    usersAfterDelete.push(...users);
  }

  if (Object.keys(newUser).length) {
    usersAfterDelete.push(newUser);
  }

  if (userId) {
    usersAfterDelete = usersAfterDelete.filter(currentUser => currentUser.id !== Number(userId));

    return usersAfterDelete;
  }

  return usersAfterDelete;
};

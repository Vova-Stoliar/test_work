export const tbody = document.createElement('tbody');

export const tableBody = (user) => {
  const tr = document.createElement('tr');

  tr.setAttribute('style', 'cursor: pointer');

  tbody.appendChild(tr);

  const userInfo = {
    name: user.name,
    username: user.username,
    email: user.email,
    website: user.website,
  };

  const tableBodyItems = Object.values(userInfo);

  return tableBodyItems.forEach((tableBodyItem) => {
    const td = document.createElement('td');

    tr.appendChild(td);

    td.setAttribute('title', `${user.id}`);
    tr.setAttribute('data-bs-toggle', 'modal');
    tr.setAttribute('data-bs-target', '#myModal');
    td.innerHTML += tableBodyItem;
  });
};

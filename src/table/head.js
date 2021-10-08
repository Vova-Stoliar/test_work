export const thead = document.createElement('thead');
export const tr = document.createElement('tr');
thead.appendChild(tr);

Object.assign(tr, {
  style: 'cursor: pointer',
});

export const tableHead = () => {
  const tableHeadItems = ['name', 'username', 'email', 'website'];

  return tableHeadItems.forEach((tableHeadItem) => {
    const th = document.createElement('th');

    th.setAttribute('title', `${tableHeadItem}`);

    tr.appendChild(th);
    th.innerHTML += tableHeadItem;
  });
};

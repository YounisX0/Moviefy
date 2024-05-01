function renderUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    const users = ['User1', 'User2', 'User3'];
    users.forEach((user, index) => {
      const listItem = document.createElement('div');
      listItem.textContent = user;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('removeButton');
      removeButton.addEventListener('click', () => {
        removeUser(index);
        renderUserList();
      });
      listItem.appendChild(removeButton);
      userList.appendChild(listItem);
    });
  }
  function addUser(username) {
    console.log(`User added: ${username}`);
  }
  function removeUser(index) {
    console.log(`User removed at index ${index}`);
  }
  document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    if (username) {
      addUser(username);
      renderUserList();
      event.target.reset();
    }
  });
  fetch('index.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const movieTitles = doc.querySelectorAll('.movie-title');
      const productNames = Array.from(movieTitles).map(title => title.textContent);
      const productList = document.getElementById('productList');
      productNames.forEach(productName => {
        const row = document.createElement('tr');
        const productNameCell = document.createElement('td');
        productNameCell.textContent = productName;
        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('removeButton');
        removeButton.addEventListener('click', () => {
          removeProduct(productName);
          renderProductList();
        });
        removeButtonCell.appendChild(removeButton);
        row.appendChild(productNameCell);
        row.appendChild(removeButtonCell);
        productList.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching content:', error));
  function removeProduct(productName) {
    console.log(`Product removed: ${productName}`);
  }
  function renderProductList() {
    console.log('Product list re-rendered');
  }
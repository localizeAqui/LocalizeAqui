// Função para carregar os itens do localStorage e exibir na página
function loadItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    renderItems(items);
}

// Função para renderizar itens na tabela
function renderItems(items) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.dono}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.location}</td>
            <td>${item.status}</td>
            <td><button onclick="removeItem(${index})">Remover</button></td>
        `;
        itemList.appendChild(row);
    });
}

// Função para adicionar novo item ao localStorage
document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dono = document.getElementById('dono').value.trim();
    const name = document.getElementById('item').value.trim();
    const description = document.getElementById('description').value.trim();
    const location = document.getElementById('location').value.trim();
    const status = document.getElementById('status').value;

    if (!dono || !name || !description || !location) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const newItem = { dono, name, description, location, status };

    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));

    document.getElementById('itemForm').reset();
    loadItems();
    showAlert('Item cadastrado com sucesso!');
});

// Função para remover item do localStorage
function removeItem(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    loadItems();
    showAlert('Item removido com sucesso!', 'danger');
}

// Função para mostrar alertas
function showAlert(message, type = 'success') {
    const alertBox = document.createElement('div');
    alertBox.className = `alert ${type}`;
    alertBox.innerText = message;
    document.body.appendChild(alertBox);

    setTimeout(() => alertBox.remove(), 3000);
}

// Função para filtrar itens
function filterItems() {
    const filter = document.getElementById('filterStatus').value;
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const filteredItems = filter ? items.filter(item => item.status === filter) : items;

    renderItems(filteredItems);
}

// Carregar itens ao iniciar a página
loadItems();
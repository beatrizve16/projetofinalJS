document.addEventListener('DOMContentLoaded', (event) => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const shoppingList = document.getElementById('shoppingList');

    let items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    let editIndex = null;

    const saveItems = () => {
        localStorage.setItem('shoppingList', JSON.stringify(items));
    };
// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const itemInput = document.getElementById('itemInput');
    const addItemButton = document.getElementById('addItemButton');
    const shoppingList = document.getElementById('shoppingList');

    let items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    let editIndex = null;

    const saveItems = () => {
        localStorage.setItem('shoppingList', JSON.stringify(items));
    };

    const renderList = () => {
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.addEventListener('click', () => {
                itemInput.value = item;
                editIndex = index;
                addItemButton.textContent = 'Salvar';
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                items.splice(index, 1);
                saveItems();
                renderList();
            });

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            shoppingList.appendChild(li);
        });
    };

    addItemButton.addEventListener('click', () => {
        const newItem = itemInput.value.trim();
        if (newItem) {
            if (editIndex !== null) {
                items[editIndex] = newItem;
                editIndex = null;
                addItemButton.textContent = 'Adicionar';
            } else {
                items.push(newItem);
            }
            itemInput.value = '';
            saveItems();
            renderList();
        }
    });

    renderList();
});

    const renderList = () => {
        shoppingList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => {
                itemInput.value = item;
                editIndex = index;
                addItemButton.textContent = 'Salvar';
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remover';
            deleteButton.addEventListener('click', () => {
                items.splice(index, 1);
                saveItems();
                renderList();
            });

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            shoppingList.appendChild(li);
        });
    };

    addItemButton.addEventListener('click', () => {
        const newItem = itemInput.value.trim();
        if (newItem) {
            if (editIndex !== null) {
                items[editIndex] = newItem;
                editIndex = null;
                addItemButton.textContent = 'Adicionar';
            } else {
                items.push(newItem);
            }
            itemInput.value = '';
            saveItems();
            renderList();
        }
    });

    renderList();
});

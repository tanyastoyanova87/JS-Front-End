function addItem() {
    const ulElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';

    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    newLiElement.append(deleteButton);
    ulElement.append(newLiElement);

    inputElement.value = '';
}

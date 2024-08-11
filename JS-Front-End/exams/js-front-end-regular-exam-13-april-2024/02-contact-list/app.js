window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    const inputName = document.getElementById('name');
    const inputPhone = document.getElementById('phone');
    const inputCategory = document.getElementById('category');
    const ulCheckEl = document.getElementById('check-list');
    const ulContactEl = document.getElementById('contact-list');

    addButton.addEventListener('click', () => {
        const name = inputName.value;
        const phone = inputPhone.value;
        const category = inputCategory.value;

        if (!name || !phone || !category) {
            return;
        }

        const pName = document.createElement('p');
        pName.textContent = `name:${name}`;

        const pPhone = document.createElement('p');
        pPhone.textContent = `phone:${phone}`;

        const pCategory = document.createElement('p');
        pCategory.textContent = `category:${category}`;

        const articleEl = document.createElement('article');
        const liEl = document.createElement('li');

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit-btn');

        const buttonSave = document.createElement('button');
        buttonSave.classList.add('save-btn');

        articleEl.appendChild(pName);
        articleEl.appendChild(pPhone);
        articleEl.appendChild(pCategory);
        liEl.appendChild(articleEl);
        ulCheckEl.appendChild(liEl);

        buttonsDiv.appendChild(buttonEdit);
        buttonsDiv.appendChild(buttonSave);
        liEl.appendChild(buttonsDiv);

        inputName.value = '';
        inputPhone.value = '';
        inputCategory.value = '';

        buttonEdit.addEventListener('click', () => {
            inputName.value = name;
            inputPhone.value = phone;
            inputCategory.value = category;

            liEl.remove();
        })

        buttonSave.addEventListener('click', () => {
            buttonsDiv.remove();
            ulContactEl.appendChild(liEl);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('del-btn');

            liEl.appendChild(deleteButton);

            deleteButton.addEventListener('click', () => {
                ulContactEl.innerHTML = '';
            })
        });
    })

}

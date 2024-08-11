window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    const inputPlace = document.getElementById('place');
    const inputAction = document.getElementById('action');
    const inputPerson = document.getElementById('person');
    const ulTaskList = document.getElementById('task-list');
    const ulDoneListEl = document.getElementById('done-list');

    addButton.addEventListener('click', () => {
        const place = inputPlace.value;
        const action = inputAction.value;
        const person = inputPerson.value;

        if (!place || !action || !person) {
            return;
        }

        const pPlace = document.createElement('p');
        pPlace.textContent = `Place:${place}`;

        const pAction = document.createElement('p');
        pAction.textContent = `Action:${action}`;

        const pPerson = document.createElement('p');
        pPerson.textContent = `Person:${person}`;

        const articleEl = document.createElement('article');
        const liEl = document.createElement('li');
        liEl.classList.add('clean-task');

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit');
        buttonEdit.textContent = 'Edit';

        const buttonDone = document.createElement('button');
        buttonDone.classList.add('done');
        buttonDone.textContent = 'Done';

        articleEl.appendChild(pPlace);
        articleEl.appendChild(pAction);
        articleEl.appendChild(pPerson);
        liEl.appendChild(articleEl);
        ulTaskList.appendChild(liEl);

        buttonsDiv.appendChild(buttonEdit);
        buttonsDiv.appendChild(buttonDone);
        liEl.appendChild(buttonsDiv);

        inputPlace.value = '';
        inputAction.value = '';
        inputPerson.value = '';

        buttonEdit.addEventListener('click', () => {
            inputPlace.value = place;
            inputAction.value = action;
            inputPerson.value = person;

            liEl.remove();
        })

        buttonDone.addEventListener('click', () => {
            buttonsDiv.remove();
            ulDoneListEl.appendChild(liEl);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'Delete';

            liEl.appendChild(deleteButton);

            deleteButton.addEventListener('click', () => {
                ulDoneListEl.innerHTML = '';
            })
        });
    }
)}


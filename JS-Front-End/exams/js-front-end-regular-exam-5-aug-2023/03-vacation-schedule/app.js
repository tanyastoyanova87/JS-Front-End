const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const listEl = document.getElementById('list');
const nameInput = document.getElementById('name');
const daysInput = document.getElementById('num-days');
const dateInput = document.getElementById('from-date');
const formDiv = document.getElementById('form');

const loadButton = document.getElementById('load-vacations');
const addVacationButton = document.getElementById('add-vacation');
const editVacationButton = document.getElementById('edit-vacation');

loadButton.addEventListener('click', loadVacations);
addVacationButton.addEventListener('click', addVacation);
editVacationButton.addEventListener('click', editVacation);

async function loadVacations() {
    listEl.innerHTML = '';

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const vacations = Object.values(result);

    const vacationsCreated = vacations.map(vacation => createVacationEl(vacation.name, vacation.date, vacation.days, vacation._id));
    listEl.append(...vacationsCreated);
}

function createVacationEl(name, date, days, _id) {
    const nameEl = document.createElement('h2');
    nameEl.textContent = name;

    const dateEl = document.createElement('h3');
    dateEl.textContent = date;

    const daysEl = document.createElement('h3');
    daysEl.textContent = days;

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    changeButton.addEventListener('click', () => {
        divContainer.remove();

        nameInput.value = name;
        dateInput.value = date;
        daysInput.value = days;

        editVacationButton.removeAttribute('disabled');
        addVacationButton.setAttribute('disabled', 'disabled');

        formDiv.setAttribute('data-vacation-id', _id);
    })

    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = 'Done';

    doneButton.addEventListener('click', async () => {
        await fetch(`${BASE_URL}/${_id}`, {
            method: 'DELETE',
        })

        await loadVacations();
    })

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    divContainer.appendChild(nameEl);
    divContainer.appendChild(dateEl);
    divContainer.appendChild(daysEl);

    divContainer.appendChild(changeButton);
    divContainer.appendChild(doneButton);

    return divContainer;
}

async function addVacation() {
    const name = nameInput.value;
    const date = dateInput.value;
    const days = daysInput.value;

    clearInputs();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, date, days })
    })

    await loadVacations();
}

function clearInputs() {
    nameInput.value = '';
    dateInput.value = '';
    daysInput.value = '';
}

async function editVacation() {
    const formId = formDiv.getAttribute('data-vacation-id');

    const name = nameInput.value;
    const date = dateInput.value;
    const days = daysInput.value;

    await fetch(`${BASE_URL}/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, date, days })
    })

    await loadVacations();

    editVacationButton.setAttribute('disabled', 'disabled');
    addVacationButton.removeAttribute('disabled');

    formDiv.removeAttribute('data-vacation-id');
}

const BASE_URL = 'http://localhost:3030/jsonstore/records';

const loadButton = document.getElementById('load-records');
const addRecordButton = document.getElementById('add-record');
const editRecordButton = document.getElementById('edit-record');

const listRecords = document.getElementById('list');
const formEl = document.getElementById('form');
const pNameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

loadButton.addEventListener('click', loadRecords);

addRecordButton.addEventListener('click', createRecord);

editRecordButton.addEventListener('click', editRecord);

async function editRecord() {
    debugger
    const formId = formEl.getAttribute('data-record-id');

    const name = pNameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    await fetch(`${BASE_URL}/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, steps, calories }),
    })

    await loadRecords();

    editRecordButton.setAttribute('disabled', 'disabled');
    addRecordButton.removeAttribute('disabled');

    formEl.removeAttribute('data-record-id');
}

async function createRecord() {
    const name = pNameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    clearInput();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, steps, calories }),
    })

    await loadRecords();
}

async function loadRecords() {
    listRecords.innerHTML = '';

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const records = Object.values(result);
    console.log(records);


    const recordsElements = records.map(record => createGameElement(record.name, record.steps, record.calories, record._id));

    listRecords.append(...recordsElements);
}

function createGameElement(name, steps, calories, _id) {
    const nameEl = document.createElement('p');
    nameEl.textContent = name;

    const stepsEl = document.createElement('p');
    stepsEl.textContent = steps;

    const caloriesEl = document.createElement('p');
    caloriesEl.textContent = calories;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const liEl = document.createElement('li');
    liEl.classList.add('record');

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    changeButton.addEventListener('click', () => {
        pNameInput.value = name;
        stepsInput.value = steps;
        caloriesInput.value = calories;

        editRecordButton.removeAttribute('disabled');
        addRecordButton.setAttribute('disabled', 'disabled');

        formEl.setAttribute('data-record-id', _id);
    })

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', async () => {
        await fetch(`${BASE_URL}/${_id}`, {
            method: 'DELETE',
        })

        await loadRecords();
    })

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('btn-wrapper');

    buttonWrapper.appendChild(changeButton);
    buttonWrapper.appendChild(deleteButton);

    infoDiv.appendChild(nameEl);
    infoDiv.appendChild(stepsEl);
    infoDiv.appendChild(caloriesEl);

    liEl.appendChild(infoDiv);
    liEl.appendChild(buttonWrapper);

    return liEl;
}

function clearInput() {
    pNameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';
}

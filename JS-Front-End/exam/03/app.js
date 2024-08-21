const BASE_URL = 'http://localhost:3030/jsonstore/matches';

const listEl = document.getElementById('list');
const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');
const formEl = document.querySelector('#form form');

const loadButton = document.getElementById('load-matches');
const addButton = document.getElementById('add-match');
const editButton = document.getElementById('edit-match');

loadButton.addEventListener('click', loadMatches);
addButton.addEventListener('click', addMatch);
editButton.addEventListener('click', editMatch);

async function loadMatches() {
    listEl.innerHTML = '';

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const matches = Object.values(result);

    const matchesCreate = matches.map(match => createMatchElement(match.host, match.score, match.guest, match._id));

    listEl.append(...matchesCreate);
}

function createMatchElement(host, score, guest, _id) {
    const hostEl = document.createElement('p');
    hostEl.textContent = host;

    const scoreEl = document.createElement('p');
    scoreEl.textContent = score;

    const guestEl = document.createElement('p');
    guestEl.textContent = guest;

    const divInfo = document.createElement('div');
    divInfo.classList.add('info');

    const liEl = document.createElement('li');
    liEl.classList.add('match');

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('btn-wrapper');

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    changeButton.addEventListener('click', () => {
        hostInput.value = host;
        scoreInput.value = score;
        guestInput.value = guest;

        editButton.removeAttribute('disabled');
        addButton.setAttribute('disabled', 'disabled');

        formEl.setAttribute('data-match-id', _id);
    })

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', async () => {
        await fetch(`${BASE_URL}/${_id}`, {
            method: 'DELETE'
        })

        await loadMatches();
    })

    buttonWrapper.appendChild(changeButton);
    buttonWrapper.appendChild(deleteButton);

    divInfo.appendChild(hostEl);
    divInfo.appendChild(scoreEl);
    divInfo.appendChild(guestEl);

    liEl.appendChild(divInfo);
    liEl.appendChild(buttonWrapper);

    return liEl;
}

async function addMatch() {
    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    clearInputs();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ host, score, guest })
    })

    await loadMatches();
}

async function editMatch() {
    const formId = formEl.getAttribute('data-match-id');

    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    await fetch(`${BASE_URL}/${formId}`, {
        method: 'PUT', 
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ host, score, guest })
    })

    await loadMatches();

    editButton.setAttribute('disabled', 'disabled');
    addButton.removeAttribute('disabled');

    formEl.removeAttribute('data-match-id');
}

function clearInputs() {
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
}

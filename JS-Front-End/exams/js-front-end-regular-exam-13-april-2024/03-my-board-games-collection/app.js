const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadButton = document.getElementById('load-games');
const gamesList = document.getElementById('games-list');
const addGameButton = document.getElementById('add-game');
const gNameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');
const editButton = document.getElementById('edit-game');
const formEl = document.querySelector('#form form');

loadButton.addEventListener('click', loadGames);

addGameButton.addEventListener('click', addGame);

editButton.addEventListener('click', editGame);

async function editGame() {
    const gameId = formEl.getAttribute('data-game-id');

    const name = gNameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    await fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, type, players, _id: gameId }),
    })

    await loadGames();

    editButton.setAttribute('disabled', 'disabled');
    addGameButton.removeAttribute('disabled');

    formEl.removeAttribute('data-game-id');
}

async function addGame() {
    const name = gNameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, type, players })
    })

    await loadGames();
}

async function loadGames() {
    gamesList.innerHTML = '';

    const response = await fetch(baseUrl);
    const result = await response.json();
    const games = Object.values(result);

    const gameElements = games.map(game => createGameElement(game.name, game.type, game.players, game._id));

    gamesList.append(...gameElements);
}

function createGameElement(name, type, players, _id) {
    const pPlayersEl = document.createElement('p');
    pPlayersEl.textContent = players;

    const pTypeEl = document.createElement('p');
    pTypeEl.textContent = type;

    const pNameEl = document.createElement('p');
    pNameEl.textContent = name;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const boardGameDiv = document.createElement('div');
    boardGameDiv.classList.add('board-game');

    const buttonChange = document.createElement('button');
    buttonChange.classList.add('change-btn');
    buttonChange.textContent = 'Change';

    buttonChange.addEventListener('click', () => {
        gNameInput.value = name;
        typeInput.value = type;
        playersInput.value = players;

        editButton.removeAttribute('disabled');
        addGameButton.setAttribute('disabled', 'disabled');

        formEl.setAttribute('data-game-id', _id);
    });

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.textContent = 'Delete';

    buttonDelete.addEventListener('click', async () => {
        await fetch(`${baseUrl}/${_id}`, {
            method: 'DELETE',
        });

        await loadGames();
    })

    const buttonContainerDiv = document.createElement('div');
    buttonContainerDiv.classList.add('buttons-container');

    buttonContainerDiv.appendChild(buttonChange);
    buttonContainerDiv.appendChild(buttonDelete);

    contentDiv.appendChild(pNameEl);
    contentDiv.appendChild(pTypeEl);
    contentDiv.appendChild(pPlayersEl);

    boardGameDiv.appendChild(contentDiv);
    boardGameDiv.appendChild(buttonContainerDiv);

    return boardGameDiv;
}

function clearInputs() {
    gNameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';
}

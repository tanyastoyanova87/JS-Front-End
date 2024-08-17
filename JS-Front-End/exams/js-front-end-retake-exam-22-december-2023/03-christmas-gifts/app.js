const BASE_URL = 'http://localhost:3030/jsonstore/gifts';

const listPresents = document.getElementById('gift-list');
const giftInput = document.getElementById('gift');
const forInput = document.getElementById('for');
const priceInput = document.getElementById('price');
const divForm = document.getElementById('form');

const loadButton = document.getElementById('load-presents');
const addPresentButton = document.getElementById('add-present');
const editPresentButton = document.getElementById('edit-present');

loadButton.addEventListener('click', loadPresents);
addPresentButton.addEventListener('click', addPresent);
editPresentButton.addEventListener('click', editPresent);

async function loadPresents() {
    listPresents.innerHTML = '';

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const presents = Object.values(result);

    const presentsCreated = presents.map(present => createPresentElement(present.gift, present.for, present.price, present._id))

    listPresents.append(...presentsCreated);
}

function createPresentElement(gift, forWho, price, _id) {
    const giftEl = document.createElement('p');
    giftEl.textContent = gift;

    const forEl = document.createElement('p');
    forEl.textContent = forWho;

    const priceEl = document.createElement('p');
    priceEl.textContent = price;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const giftSockDiv = document.createElement('div');
    giftSockDiv.classList.add('gift-sock');

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    changeButton.addEventListener('click', () => {
        giftSockDiv.remove();

        giftInput.value = gift;
        forInput.value = forWho;
        priceInput.value = price;

        editPresentButton.removeAttribute('disabled');
        addPresentButton.setAttribute('disabled', 'disabled');

        divForm.setAttribute('data-present-id', _id);
    })

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', async () => {
        await fetch(`${BASE_URL}/${_id}`, {
            method: 'DELETE',
        })

        await loadPresents();
    })

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    contentDiv.appendChild(giftEl);
    contentDiv.appendChild(forEl);
    contentDiv.appendChild(priceEl);

    giftSockDiv.appendChild(contentDiv);
    giftSockDiv.appendChild(buttonsContainer);

    return giftSockDiv;
}

async function addPresent() {
    const gift = giftInput.value;
    const forWho = forInput.value;
    const price = priceInput.value;

    clearInputs();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ gift, for: forWho, price }),
    })

    await loadPresents();
}

async function editPresent() {
    const formId = divForm.getAttribute('data-present-id');

    const gift = giftInput.value;
    const forWho = forInput.value;
    const price = priceInput.value;

    await fetch(`${BASE_URL}/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ gift, for: forWho, price }),
    })

    await loadPresents();

    editPresentButton.setAttribute('disabled', 'disabled');
    addPresentButton.removeAttribute('disabled');

    divForm.removeAttribute('data-present-id');
}

function clearInputs() {
    giftInput.value = '';
    forInput.value = '';
    priceInput.value = '';
}

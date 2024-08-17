const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const listEl = document.getElementById('list');
const locationInput = document.getElementById('location');
const temperatureInput = document.getElementById('temperature');
const dateInput = document.getElementById('date');
const divForm = document.getElementById('form');

const loadButton = document.getElementById('load-history');
const addWeatherButton = document.getElementById('add-weather');
const editWeatherButton = document.getElementById('edit-weather');

loadButton.addEventListener('click', loadRecords);
addWeatherButton.addEventListener('click', addWeather);
editWeatherButton.addEventListener('click', editWeather);

async function loadRecords() {
    listEl.innerHTML = '';

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const records = Object.values(result);

    const recordsCreated = records.map(record => createPresentElement(record.location, record.date, record.temperature, record._id))

    listEl.append(...recordsCreated);
}

function createPresentElement(location, date, temperature, _id) {
    const locationEl = document.createElement('h2');
    locationEl.textContent = location;

    const dateEl = document.createElement('h3');
    dateEl.textContent = date;

    const temperatureEl = document.createElement('h3');
    temperatureEl.id = 'celsius';
    temperatureEl.textContent = temperature;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const buttonsContainerDiv = document.createElement('div');
    buttonsContainerDiv.classList.add('buttons-container');

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    changeButton.addEventListener('click', () => {
        containerDiv.remove();

        locationInput.value = location;
        dateInput.value = date;
        temperatureInput.value = temperature;

        editWeatherButton.removeAttribute('disabled');
        addWeatherButton.setAttribute('disabled', 'disabled');

        divForm.setAttribute('data-weather-id', _id);
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

    buttonsContainerDiv.appendChild(changeButton);
    buttonsContainerDiv.appendChild(deleteButton);

    containerDiv.appendChild(locationEl);
    containerDiv.appendChild(dateEl);
    containerDiv.appendChild(temperatureEl);

    containerDiv.appendChild(buttonsContainerDiv);

    return containerDiv;
}

async function addWeather() {
    const location = locationInput.value;
    const date = dateInput.value;
    const temperature = temperatureInput.value;

    clearInputs();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ location, date, temperature }),
    })

    await loadRecords();
}

async function editWeather() {
    const formId = divForm.getAttribute('data-weather-id');

    const location = locationInput.value;
    const date = dateInput.value;
    const temperature = temperatureInput.value;

    await fetch(`${BASE_URL}/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ location, date, temperature }),
    })

    await loadRecords();

    editWeatherButton.setAttribute('disabled', 'disabled');
    addWeatherButton.removeAttribute('disabled');

    divForm.removeAttribute('data-weather-id');
}

function clearInputs() {
    locationInput.value = '';
    dateInput.value = '';
    temperatureInput.value = '';
}

const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const listEl = document.getElementById('list');
const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');
const formEl = document.querySelector('#form form');

const loadMealsButton = document.getElementById('load-meals');
const addMealButton = document.getElementById('add-meal');
const editMealButton = document.getElementById('edit-meal');

loadMealsButton.addEventListener('click', loadMeals);
addMealButton.addEventListener('click', addMeal);
editMealButton.addEventListener('click', editMeal);

async function loadMeals() {
    listEl.innerHTML = '';

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const meals = Object.values(result);

    const mealsToLoad = meals.map(meal => createMealElement(meal.food, meal.time, meal.calories, meal._id));
    listEl.append(...mealsToLoad);
}

function createMealElement(food, time, calories, _id) {
    const foodEl = document.createElement('h2');
    foodEl.textContent = food;

    const timeEl = document.createElement('h3');
    timeEl.textContent = time;

    const caloriesEl = document.createElement('h3');
    caloriesEl.textContent = calories;

    const mealDivEl = document.createElement('div');
    mealDivEl.classList.add('meal');

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-meal');
    changeButton.textContent = 'Change';

    changeButton.addEventListener('click', () => {
        mealDivEl.remove();

        foodInput.value = food;
        timeInput.value = time
        caloriesInput.value = calories;

        editMealButton.removeAttribute('disabled');
        addMealButton.setAttribute('disabled', 'disabled');

        formEl.setAttribute('data-meal-id', _id);
    })

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-meal');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', async () => {
        await fetch(`${BASE_URL}/${_id}`, {
            method: 'DELETE',
        })

        await loadMeals();
    })

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('meal-buttons');

    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    mealDivEl.appendChild(foodEl);
    mealDivEl.appendChild(timeEl);
    mealDivEl.appendChild(caloriesEl);

    mealDivEl.appendChild(buttonsDiv);

    return mealDivEl;
}

async function addMeal() {
    const food = foodInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    clearInputs();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ food, time, calories })
    })
    
    await loadMeals();
}

async function editMeal() {
    const formId = formEl.getAttribute('data-meal-id');

    const food = foodInput.value;
    const time = timeInput.value;
    const calories = caloriesInput.value;

    await fetch(`${BASE_URL}/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ food, time, calories }),
    })

    formEl.removeAttribute('data-meal-id');

    await loadMeals();

    editMealButton.setAttribute('disabled', 'disabled');
    addMealButton.removeAttribute('disabled');
}

function clearInputs() {
    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';
}

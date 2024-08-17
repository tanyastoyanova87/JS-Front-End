const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const todoSection = document.getElementById('todo-section');
const inProgressSection = document.getElementById('in-progress-section');
const codeReviewSection = document.getElementById('code-review-section');
const doneSection = document.getElementById('done-section');
const titleInput = document.getElementById('title');
const descriptionTextarea = document.getElementById('description');


const loadBoardButton = document.getElementById('load-board-btn');
const createTaskButton = document.getElementById('create-task-btn');

loadBoardButton.addEventListener('click', loadBoard);
createTaskButton.addEventListener('click', createTask);

async function loadBoard() {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    const boards = Object.values(result);

    const boardsCreate = boards.map(board => createBoard(board.title, board.description, board.status, board._id));

    boardsCreate.forEach(board => {
        const buttonEl = board.querySelector('button');
        const buttonTextContent = buttonEl.textContent;

        if (buttonTextContent === 'Move to In Progress') {
            const list = todoSection.querySelector('.task-list');
            list.appendChild(board)
        } else if (buttonTextContent === 'Move to Code Review') {
            const list = inProgressSection.querySelector('.task-list');
            list.appendChild(board)
        } else if (buttonTextContent === 'Move to Done') {
            const list = codeReviewSection.querySelector('.task-list');
            list.appendChild(board)
        } else if (buttonTextContent === 'Close') {
            const list = doneSection.querySelector('.task-list');
            list.appendChild(board)
        }
    });
}

function createBoard(title, description, status, _id) {
    const titleEl = document.createElement('h3');
    titleEl.textContent = title;

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = description;

    const button = document.createElement('button');

    let newStatus = '';
    if (status === 'ToDo') {
        button.textContent = 'Move to In Progress';
        newStatus = 'In Progress';
    } else if (status === 'In Progress') {
        button.textContent = 'Move to Code Review';
        newStatus = 'Code Review';
    } else if (status === 'Code Review') {
        button.textContent = 'Move to Done';
        newStatus = 'Done'
    } else if (status === 'Done') {
        button.textContent = 'Close';
    }

    button.addEventListener('click', async () => {
        if (newStatus != '') {
            await fetch(`${BASE_URL}/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus })
            })

            await loadBoard();
        } else {
            await fetch(`${BASE_URL}/${_id}`, {
                method: 'DELETE',
            })
            await loadBoard();
        }
    })

    const liEl = document.createElement('li');
    liEl.classList.add('task');

    liEl.appendChild(titleEl);
    liEl.appendChild(descriptionEl);
    liEl.appendChild(button);

    return liEl;
}

async function createTask() {
    const title = titleInput.value;
    const description = descriptionTextarea.value;
    const status = 'ToDo';

    clearInputs();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description, status })
    })

    await loadBoard();
}

function clearInputs() {
    titleInput.value = '';
    descriptionTextarea.value = '';
}

window.addEventListener('load', solve);

function solve() {
    let taskCounter = 1;

    const taskSection = document.getElementById('tasks-section');
    const createButton = document.getElementById('create-task-btn');
    const deleteTaskButton = document.getElementById('delete-task-btn');
    const inputHidden = document.getElementById('task-id');
    const totalPointP = document.getElementById('total-sprint-points');

    const inputTitle = document.getElementById('title');
    const textareaDescription = document.getElementById('description');
    const selectLabel = document.getElementById('label');
    const inputPoints = document.getElementById('points');
    const inputAssignee = document.getElementById('assignee');

    createButton.addEventListener('click', () => {
        const title = inputTitle.value;
        const description = textareaDescription.value;
        const label = selectLabel.value;
        const points = inputPoints.value;
        const assignee = inputAssignee.value;

        if (!title || !description || !label || !points || !assignee) {
            return;
        }

        const pointsEl = totalPointP.textContent.trim().split(' ');
        const pointsCountEl = pointsEl[2].split('');
        let pointsNum = Number(pointsCountEl[0]);

        const article = document.createElement('article');
        article.id = `task-${Number(taskCounter++)}`;
        article.classList.add('task-card');

        const divLabel = document.createElement('div');
        divLabel.classList.add('task-card-label');

        if (label === 'Feature') {
            divLabel.classList.add('feature');
            divLabel.innerHTML = 'Feature &#8865;';
        } else if (label === 'Low Priority Bug') {
            divLabel.classList.add('low-priority');
            divLabel.innerHTML = 'Low Priority Bug &#9737;';
        } else if (label === 'High Priority Bug') {
            divLabel.classList.add('high-priority');
            divLabel.innerHTML = 'High Priority Bug &#9888;'
        }

        const h3El = document.createElement('h3');
        h3El.classList.add('task-card-title');
        h3El.textContent = title;

        const pEl = document.createElement('p');
        pEl.classList.add('task-card-description');
        pEl.textContent = description;

        const divPoints = document.createElement('div');
        divPoints.classList.add('task-card-points');
        divPoints.textContent = `Estimated at ${points} pts`;
        pointsNum += Number(points);

        const divAssignee = document.createElement('div');
        divAssignee.classList.add('task-card-assignee');
        divAssignee.textContent = `Assigned to: ${assignee}`;

        const divButton = document.createElement('div');
        divButton.classList.add('task-card-actions');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        article.appendChild(divLabel);
        article.appendChild(h3El);
        article.appendChild(pEl);
        article.appendChild(divPoints);
        article.appendChild(divAssignee);
        article.appendChild(divButton);

        divButton.appendChild(deleteButton);

        taskSection.appendChild(article);

        inputTitle.value = '';
        textareaDescription.value = '';
        selectLabel.value = '';
        inputPoints.value = '';
        inputAssignee.value = '';

        totalPointP.textContent = `Total Points ${pointsNum}pts`;

        deleteButton.addEventListener('click', () => {
            inputTitle.value = title;
            textareaDescription.value = description;
            selectLabel.value = label;
            inputPoints.value = points;
            inputAssignee.value = assignee;

            deleteTaskButton.removeAttribute('disabled');
            createButton.setAttribute('disabled', 'disabled');

            inputTitle.setAttribute('disabled', 'disabled');
            textareaDescription.setAttribute('disabled', 'disabled');
            selectLabel.setAttribute('disabled', 'disabled');
            inputPoints.setAttribute('disabled', 'disabled');
            inputAssignee.setAttribute('disabled', 'disabled');

            inputHidden.id = article.id;
        })

        deleteTaskButton.addEventListener('click', () => {
            article.remove();

            inputTitle.value = '';
            textareaDescription.value = '';
            selectLabel.value = '';
            inputPoints.value = '';
            inputAssignee.value = '';

            inputTitle.removeAttribute('disabled');
            textareaDescription.removeAttribute('disabled');
            selectLabel.removeAttribute('disabled');
            inputPoints.removeAttribute('disabled');
            inputAssignee.removeAttribute('disabled');

            createButton.removeAttribute('disabled');
            deleteTaskButton.setAttribute('disabled', 'disabled');

            totalPointP.textContent = `Total Points ${pointsNum - Number(points)}pts`;
        })
    })
}

const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

const listEl = document.getElementById('list');
const courseNameInput = document.getElementById('course-name');
const courseTypeInput = document.getElementById('course-type');
const descriptionTextarea = document.getElementById('description');
const teacherNameInput = document.getElementById('teacher-name');
const formDiv = document.getElementById('form');

const loadButton = document.getElementById('load-course');
const addCourseButton = document.getElementById('add-course');
const editCourseButton = document.getElementById('edit-course');

loadButton.addEventListener('click', loadCourse);
addCourseButton.addEventListener('click', addCourse);
editCourseButton.addEventListener('click', editCourse);

async function loadCourse() {
    listEl.innerHTML = '';

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const courses = Object.values(result);

    const coursesCreate = courses
        .map(course => createCourseEl(course.title, course.teacher, course.type, course.description, course._id));

    listEl.append(...coursesCreate);
}

function createCourseEl(title, teacher, type, description, _id) {
    const titleEl = document.createElement('h2');
    titleEl.textContent = title;

    const teacherEl = document.createElement('h3');
    teacherEl.textContent = teacher;

    const typeEl = document.createElement('h3');
    typeEl.textContent = type;

    const descriptionEl = document.createElement('h4');
    descriptionEl.textContent = description;

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit Course';

    editButton.addEventListener('click', () => {
        containerDiv.remove();

        courseNameInput.value = title;
        teacherNameInput.value = teacher;
        courseTypeInput.value = type;
        descriptionTextarea.value = description;

        editCourseButton.removeAttribute('disabled');
        addCourseButton.setAttribute('disabled', 'disabled');

        formDiv.setAttribute('data-course-id', _id);
    })

    const finishButton = document.createElement('button');
    finishButton.classList.add('finish-btn');
    finishButton.textContent = 'Finish Course';

    finishButton.addEventListener('click', async () => {
        await fetch(`${BASE_URL}/${_id}`, {
            method: 'DELETE',
        })

        await loadCourse();
    })

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    containerDiv.appendChild(titleEl);
    containerDiv.appendChild(teacherEl);
    containerDiv.appendChild(typeEl);
    containerDiv.appendChild(descriptionEl);

    containerDiv.appendChild(editButton);
    containerDiv.appendChild(finishButton);

    return containerDiv;
}

async function addCourse() {
    const title = courseNameInput.value;
    const teacher = teacherNameInput.value;
    const type = courseTypeInput.value;
    const description = descriptionTextarea.value;

    clearInputs();

    await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, teacher, type, description })
    })

    loadCourse();
}

async function editCourse() {
    const formId = formDiv.getAttribute('data-course-id');

    const title = courseNameInput.value;
    const teacher = teacherNameInput.value;
    const type = courseTypeInput.value;
    const description = descriptionTextarea.value;

    await fetch(`${BASE_URL}/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, teacher, type, description })
    })

    await loadCourse();

    editCourseButton.setAttribute('disabled', 'disabled');
    addCourseButton.removeAttribute('disabled');

    formDiv.removeAttribute('data-course-id');
}

function clearInputs() {
    courseNameInput.value = '';
    teacherNameInput.value = '';
    courseTypeInput.value = '';
    descriptionTextarea.value = '';
}

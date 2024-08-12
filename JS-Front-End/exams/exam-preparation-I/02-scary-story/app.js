window.addEventListener("load", solve);

function solve() {
    const inputFirstName = document.getElementById('first-name');
    const inputLastName = document.getElementById('last-name');
    const inputAge = document.getElementById('age');
    const inputStoryTitle = document.getElementById('story-title');
    const inputGenre = document.getElementById('genre');
    const textareaStory = document.getElementById('story');

    const publishButton = document.getElementById('form-btn');
    const previewUl = document.getElementById('preview-list');
    const divMain = document.getElementById('main');
    const divFormWrapper = document.querySelector('.form-wrapper');

    publishButton.addEventListener('click', () => {
        const firstName = inputFirstName.value;
        const lastName = inputLastName.value;
        const age = inputAge.value;
        const title = inputStoryTitle.value;
        const genre = inputGenre.value;
        const story = textareaStory.value;

        if (!firstName || !lastName || !age || !title || !genre || !story) {
            return;
        }

        const liEl = document.createElement('li');
        liEl.classList.add('story-info');

        const article = document.createElement('article');

        const h4 = document.createElement('h4');
        h4.textContent = `Name: ${firstName} ${lastName}`;

        const pAge = document.createElement('p');
        pAge.textContent = `Age: ${age}`;

        const pTitle = document.createElement('p');
        pTitle.textContent = `Title: ${title}`;

        const pGenre = document.createElement('p');
        pGenre.textContent = `Genre: ${genre}`

        const pStory = document.createElement('p');
        pStory.textContent = story;

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save Story';

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit Story';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete Story';

        article.appendChild(h4);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(pStory);

        liEl.appendChild(article);
        liEl.appendChild(saveButton);
        liEl.appendChild(editButton);
        liEl.appendChild(deleteButton);
        previewUl.appendChild(liEl);

        inputFirstName.value = '';
        inputLastName.value = '';
        inputAge.value = '';
        inputStoryTitle.value = '';
        inputGenre.value = '';
        textareaStory.value = '';

        publishButton.setAttribute('disabled', 'disabled');
        saveButton.removeAttribute('disabled');
        editButton.removeAttribute('disabled');
        deleteButton.removeAttribute('disabled');

        editButton.addEventListener('click', () => {
            liEl.remove();

            inputFirstName.value = firstName;
            inputLastName.value = lastName;
            inputAge.value = age;
            inputStoryTitle.value = title;
            inputGenre.value = genre;
            textareaStory.value = story;

            publishButton.removeAttribute('disabled');
            saveButton.setAttribute('disabled', 'disabled');
            editButton.setAttribute('disabled', 'disabled');
            deleteButton.setAttribute('disabled', 'disabled');
        })

        saveButton.addEventListener('click', () => {
            divFormWrapper.remove();
            previewUl.remove();

            const h1 = document.createElement('h1');
            h1.textContent = 'Your scary story is saved!';

            divMain.appendChild(h1);
        })

        deleteButton.addEventListener('click', () => {
            liEl.remove();
            publishButton.removeAttribute('disabled');
        })
    })
}

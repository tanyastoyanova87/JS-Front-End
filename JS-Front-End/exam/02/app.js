window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById('name');
    const timeInput = document.getElementById('time');
    const descriptionTextarea = document.getElementById('description');

    const addButton = document.getElementById('add-btn');
    const ulPreviewEl = document.getElementById('preview-list');
    const ulArchiveListEl = document.getElementById('archive-list');


    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        const name = nameInput.value;
        const time = timeInput.value;
        const description = descriptionTextarea.value;

        if (!name || !time || !description) {
            return;
        }
        const nameEl = document.createElement('p');
        nameEl.textContent = nameInput.value;

        const timeEl = document.createElement('p');
        timeEl.textContent = timeInput.value;

        const descriptionEl = document.createElement('p');
        descriptionEl.textContent = descriptionTextarea.value;

        const articleEl = document.createElement('article');

        const liEl = document.createElement('li');

        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';

        editButton.addEventListener('click', () => {
            nameInput.value = name;
            timeInput.value = time;
            descriptionTextarea.value = description;

            liEl.remove();

            addButton.removeAttribute('disabled');
        })

        const nextButton = document.createElement('button');
        nextButton.classList.add('next-btn');
        nextButton.textContent = 'Next';

        nextButton.addEventListener('click', () => {
            divButtons.remove();
            
            ulArchiveListEl.appendChild(liEl);

            const buttonArchive = document.createElement('button');
            buttonArchive.classList.add('archive-btn');
            buttonArchive.textContent = 'Archive';

            liEl.appendChild(buttonArchive);

            buttonArchive.addEventListener('click', () => {
                liEl.remove();
                addButton.removeAttribute('disabled');
            })
        })

        divButtons.appendChild(editButton);
        divButtons.appendChild(nextButton);

        articleEl.appendChild(nameEl);
        articleEl.appendChild(timeEl);
        articleEl.appendChild(descriptionEl);

        liEl.appendChild(articleEl);
        liEl.appendChild(divButtons);
        ulPreviewEl.appendChild(liEl);

        nameInput.value = '';
        timeInput.value = '';
        descriptionTextarea.value = '';
        
        addButton.setAttribute('disabled', 'disabled');

    })
}

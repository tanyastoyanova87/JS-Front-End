window.addEventListener('load', solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    const inputGenre = document.getElementById('genre');
    const inputName = document.getElementById('name');
    const inputAuthor = document.getElementById('author');
    const inputDate = document.getElementById('date');
    const divaAllHitsContainer = document.querySelector('.all-hits-container');
    const totalLikesSection = document.getElementById('total-likes');
    const divSavedContainer = document.querySelector('.saved-container');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const genre = inputGenre.value;
        const name = inputName.value;
        const author = inputAuthor.value;
        const date = inputDate.value;

        if (!genre || !name || !author || !date) {
            return;
        }

        const hGenre = document.createElement('h2');
        hGenre.textContent = `Genre: ${genre}`;

        const hName = document.createElement('h2');
        hName.textContent = `Name: ${name}`;

        const hAuthor = document.createElement('h2');
        hAuthor.textContent = `Author: ${author}`;

        const hDate = document.createElement('h3');
        hDate.textContent = `Date: ${date}`;

        const imgEl = document.createElement('img');
        imgEl.src = './static/img/img.png'

        const divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');

        const buttonSave = document.createElement('button');
        buttonSave.classList.add('save-btn');
        buttonSave.textContent = 'Save song';

        const buttonLike = document.createElement('button');
        buttonLike.classList.add('like-btn');
        buttonLike.textContent = 'Like song';

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'Delete';

        divHitsInfo.appendChild(imgEl);
        divHitsInfo.appendChild(hGenre);
        divHitsInfo.appendChild(hName);
        divHitsInfo.appendChild(hAuthor);
        divHitsInfo.appendChild(hDate);

        divHitsInfo.appendChild(buttonSave);
        divHitsInfo.appendChild(buttonLike);
        divHitsInfo.appendChild(buttonDelete);

        divaAllHitsContainer.appendChild(divHitsInfo);

        inputGenre.value = '';
        inputName.value = '';
        inputAuthor.value = '';
        inputDate.value = '';

        buttonLike.addEventListener('click', () => {
            const pText = totalLikesSection.querySelector('p');
            const text = pText.textContent.split(': ');
            let likes = Number(text[1]);
            likes++;
            pText.textContent = `Total Likes: ${likes}`;

            buttonLike.setAttribute('disabled', 'disabled');

        })

        buttonSave.addEventListener('click', () => {
            buttonLike.remove();
            buttonSave.remove();

            divSavedContainer.appendChild(divHitsInfo);

        });
        
        buttonDelete.addEventListener('click', () => {
            divHitsInfo.remove();
        })
    })
}

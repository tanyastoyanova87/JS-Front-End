window.addEventListener("load", solve);

function solve() {
    const inputTypeOfAnimalElement = document.querySelector('input[type="text"]');
    const inputAgeElement = document.querySelector('input[type="number"]');
    const selectGenderElement = document.querySelector('select[name="gender"]');

    const adoptedList = document.querySelector('#adopted-list');
    const buttonAdopt = document.querySelector('#adopt-btn');

    buttonAdopt.addEventListener('click', (event) => {
        event.preventDefault();

        const type = inputTypeOfAnimalElement.value;
        const age = inputAgeElement.value;
        const gender = selectGenderElement.value;

        if (!type || !age || !gender) {
            return;
        }

        const adoptionInfoUl = document.querySelector('#adoption-info');
        const createLi = document.createElement('li');
        const createArticle = document.createElement('article');

        const pTypeElement = document.createElement('p');
        const pGenderElement = document.createElement('p');
        const pAgeElement = document.createElement('p');

        pTypeElement.textContent = `Pet:${type}`;
        pGenderElement.textContent = `Gender:${gender}`;
        pAgeElement.textContent = `Age:${age}`;

        const createDiv = document.createElement('div');
        createDiv.classList.add('buttons');

        const createButtonEdit = document.createElement('button');
        createButtonEdit.classList.add('edit-btn');
        createButtonEdit.textContent = 'Edit';

        const createButtonDone = document.createElement('button');
        createButtonDone.classList.add('done-btn');
        createButtonDone.textContent = 'Done';

        createDiv.appendChild(createButtonEdit);
        createDiv.appendChild(createButtonDone);

        createArticle.appendChild(pTypeElement);
        createArticle.appendChild(pGenderElement);
        createArticle.appendChild(pAgeElement);

        createLi.appendChild(createArticle);
        createLi.appendChild(createDiv);
        adoptionInfoUl.appendChild(createLi);

        inputTypeOfAnimalElement.value = '';
        inputAgeElement.value = '';
        selectGenderElement.value = '';

        createButtonEdit.addEventListener('click', () => {
            inputTypeOfAnimalElement.value = type;
            inputAgeElement.value = age;
            selectGenderElement.value = gender;

            createLi.remove();
        });

        createButtonDone.addEventListener('click', () => {
            createDiv.remove();

            adoptedList.appendChild(createLi);

            buttonClear = document.createElement('button');
            buttonClear.classList.add('clear-btn');
            buttonClear.textContent = 'Clear';

            createLi.appendChild(buttonClear);

            buttonClear.addEventListener('click', () => {
                createLi.remove();
                buttonClear.remove()
            });
        });
    });
}

window.addEventListener("load", solve);

function solve() {
    const nextButton = document.getElementById('next-btn');
    const inputStudentName = document.getElementById('student');
    const inputUniversity = document.getElementById('university');
    const inputScore = document.getElementById('score');
    const ulPreviewListEl = document.getElementById('preview-list');
    const ulCandidatesListEl = document.getElementById('candidates-list');

    nextButton.addEventListener('click', () => {
        const name = inputStudentName.value;
        const university = inputUniversity.value;
        const score = inputScore.value;

        if (!name || !university || !score) {
            return;
        }

        const hName = document.createElement('h4');
        hName.textContent = name;

        const pUniversity = document.createElement('p');
        pUniversity.textContent = `University: ${university}`;

        const pScore = document.createElement('p');
        pScore.textContent = `Score: ${score}`;

        const articleEl = document.createElement('article');
        const liEl = document.createElement('li');
        liEl.classList.add('application');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('action-btn', 'edit');
        buttonEdit.textContent = 'edit';

        const buttonApply = document.createElement('button');
        buttonApply.classList.add('action-btn', 'apply');
        buttonApply.textContent = 'apply';

        articleEl.appendChild(hName);
        articleEl.appendChild(pUniversity);
        articleEl.appendChild(pScore);
        liEl.appendChild(articleEl);
        ulPreviewListEl.appendChild(liEl);

        liEl.appendChild(buttonEdit);
        liEl.appendChild(buttonApply);

        nextButton.setAttribute('disabled', 'disabled');

        inputStudentName.value = '';
        inputUniversity.value = '';
        inputScore.value = '';

        buttonEdit.addEventListener('click', () => {
            inputStudentName.value = name;
            inputUniversity.value = university;
            inputScore.value = score;

            liEl.remove();

            nextButton.removeAttribute('disabled');
        })

        buttonApply.addEventListener('click', () => {
            buttonEdit.remove();
            buttonApply.remove();
            ulCandidatesListEl.appendChild(liEl);

            nextButton.removeAttribute('disabled');
        });
    })
}

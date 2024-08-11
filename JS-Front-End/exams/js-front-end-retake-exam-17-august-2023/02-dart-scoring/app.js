window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    const inputPlayer = document.getElementById('player');
    const inputScore = document.getElementById('score');
    const inputRound = document.getElementById('round');
    const ulSureListEl = document.getElementById('sure-list');
    const ulScoreboardListEl = document.getElementById('scoreboard-list');
    const buttonClear = document.querySelector('.btn.clear');

    addButton.addEventListener('click', () => {
        const player = inputPlayer.value;
        const score = inputScore.value;
        const round = inputRound.value;

        if (!player || !score || !round) {
            return;
        }

        const pPlayer = document.createElement('p');
        pPlayer.textContent = player;

        const pScore = document.createElement('p');
        pScore.textContent = `Score: ${score}`;

        const pRound = document.createElement('p');
        pRound.textContent = `Round: ${round}`;

        const articleEl = document.createElement('article');
        const liEl = document.createElement('li');
        liEl.classList.add('dart-item');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('btn', 'edit');
        buttonEdit.textContent = 'edit';

        const buttonOk = document.createElement('button');
        buttonOk.classList.add('btn', 'ok');
        buttonOk.textContent = 'ok';

        articleEl.appendChild(pPlayer);
        articleEl.appendChild(pScore);
        articleEl.appendChild(pRound);
        liEl.appendChild(articleEl);
        ulSureListEl.appendChild(liEl);

        liEl.appendChild(buttonEdit);
        liEl.appendChild(buttonOk);

        addButton.setAttribute('disabled', 'disabled');

        inputPlayer.value = '';
        inputScore.value = '';
        inputRound.value = '';

        buttonEdit.addEventListener('click', () => {
            inputPlayer.value = player;
            inputScore.value = score;
            inputRound.value = round;

            liEl.remove();

            addButton.removeAttribute('disabled');
        })

        buttonOk.addEventListener('click', () => {
            buttonEdit.remove();
            buttonOk.remove();

            ulScoreboardListEl.appendChild(liEl);

            addButton.removeAttribute('disabled');

            buttonClear.addEventListener('click', () => {
                ulScoreboardListEl.innerHTML = '';
            })
        });
    })
}

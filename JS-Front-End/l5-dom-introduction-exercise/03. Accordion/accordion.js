function toggle() {
    const buttonTextEl = document.getElementsByClassName('button')[0];
    const extraEl = document.querySelector('#extra');

    debugger
    if(extraEl.style.display === 'none') {
        extraEl.style.display = 'block';
        buttonTextEl.textContent = 'Less';
    } else {
        extraEl.style.display = 'none';
        buttonTextEl.textContent = 'More';
    }
}

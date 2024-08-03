function validate() {
    const inputEl = document.querySelector('#email');
    const regex = /[a-z]+@[a-z]+\.[a-z]+/g;

    inputEl.addEventListener('change', (e) => {
        if (!regex.test(e.currentTarget.value)) {
            inputEl.classList.add('error');
            return;
        }

        inputEl.classList.remove('error');
        inputEl.value = '';
    });
}

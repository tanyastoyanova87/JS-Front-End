function focused() {
    const inputEls = document.querySelectorAll('input[type="text"]');

    inputEls.forEach(inputElement => {
        inputElement.addEventListener('focus', (e) => {
            e.currentTarget.parentElement.classList.add('focused');
        })

        inputElement.addEventListener('blur', (e) => {
            e.currentTarget.parentElement.classList.remove('focused');
        })
    });
}

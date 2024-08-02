function deleteByEmail() {
    const inputEl = document.querySelector('input[type="text"');
    const resultEl = document.querySelector('#result');
    const rowsEls = document.querySelectorAll('tr td');

    for (const row of rowsEls) {
        if(row.textContent.includes(inputEl.value)) {
            row.parentElement.remove();
            resultEl.textContent = 'Deleted.'
        } else {
            resultEl.textContent = 'Not found.'
        }
    }
}

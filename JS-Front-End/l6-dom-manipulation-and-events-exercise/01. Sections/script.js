function create(words) {
    let divElements = [];
    words.forEach(word => {
        const divEl = document.createElement('div');
        const paragraphEl = document.createElement('p');
        divEl.append(paragraphEl);

        paragraphEl.style.display = 'none';
        paragraphEl.textContent = word.toString();

        divElements.push(divEl);
    });

    divElements.forEach(divEl => divEl.addEventListener('click', (e) => {
        e.currentTarget.querySelector('p').style.display = 'block';
        
    }));
    
    const contentEl = document.querySelector('#content');
    divElements.forEach(divEl => contentEl.append(divEl));
}

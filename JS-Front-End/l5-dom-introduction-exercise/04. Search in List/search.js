function search() {
    const listItemsEls = document.querySelectorAll('#towns li');
    const searchEl = document.querySelector('#searchText');
    const resultEl = document.querySelector('#result');
    
    function getMatchEls(searchInput) {
        return [...listItemsEls].filter(item =>
            item.textContent.toLowerCase().includes(searchInput.value.toLowerCase()));
    }

    function clearMatches() {
        listItemsEls.forEach(el => {
            el.style.fontWeight = 'normal';
            el.style.textDecoration = 'none';
            searchEl.value = '';
        });
    }
    
    clearMatches();
    
    const matches = getMatchEls(searchEl);

    matches.forEach(match => {
        match.style.fontWeight = 'bold';
        match.style.textDecoration = 'underline';
    });

    resultEl.textContent = `${matches.length} matches found`;
}

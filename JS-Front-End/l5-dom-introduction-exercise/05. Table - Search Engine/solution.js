function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const rowsEls = document.querySelectorAll('tbody tr');
        const searchEl = document.querySelector('#searchField');

        function getMatchRows(searchInput) {
            return [...rowsEls].filter(row =>
                row.textContent.toLowerCase().includes(searchInput.value.toLowerCase()));
        }
        
        function clearMatches() {
            rowsEls.forEach(row => {
                row.classList.remove('select');
            });
        }
        
        clearMatches();
        
        const matches = getMatchRows(searchEl);
        matches.forEach(match => match.classList.add('select'));
        
        searchEl.value = '';
    }
}

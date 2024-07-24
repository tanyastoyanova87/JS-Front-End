function sumTable() {
    const tdElements = document.querySelectorAll('table td:nth-child(2):not(#sum)');
    const sumElement = document.getElementById('sum');

    const sum = Array.from(tdElements).reduce((sum, td) => sum + Number(td.textContent), 0);
    sumElement.textContent = sum;
}

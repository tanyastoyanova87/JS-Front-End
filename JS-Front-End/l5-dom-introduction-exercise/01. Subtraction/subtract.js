function subtract() {
    const firstNumEl = document.getElementById('firstNumber');
    const secondNumEl = document.getElementById('secondNumber');
    
    const resultEl = document.getElementById('result');
    resultEl.textContent = Number(firstNumEl.value) - Number(secondNumEl.value);
}



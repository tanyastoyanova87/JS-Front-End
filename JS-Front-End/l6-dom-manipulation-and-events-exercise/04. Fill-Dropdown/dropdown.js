function addItem() {
    let inputTextEl = document.querySelector('#newItemText');
    let inputValueEl = document.querySelector('#newItemValue');
    
    const optionEl = document.createElement('option');
    optionEl.textContent = inputTextEl.value;
    optionEl.value = inputValueEl.value;
    
    const menuEl = document.querySelector('#menu');
    menuEl.append(optionEl);
    
    inputTextEl.value = '';
    inputValueEl.value = '';
}

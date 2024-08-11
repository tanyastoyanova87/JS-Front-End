window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    const inputExpenseEl = document.getElementById('expense')
    const inputAmountEl = document.getElementById('amount')
    const inputDateEl = document.getElementById('date');
    const expensesListUlEl = document.getElementById('expenses-list');
    const deleteButton = document.querySelector('.btn.delete');
    
    addButton.addEventListener('click', () => {
        const expense = inputExpenseEl.value;
        const amount = inputAmountEl.value;
        const date = inputDateEl.value;

        if(!expense || !amount || !date) {
            return;
        }
        
        const previewUlEl = document.getElementById('preview-list');
        const liEl = document.createElement('li');
        liEl.classList.add('expense-item');
        
        const articleEl = document.createElement('article');
        const expenseP = document.createElement('p');
        const amountP = document.createElement('p');
        const dateP = document.createElement('p');

        expenseP.textContent = `Type: ${expense}`;
        amountP.textContent = `Amount: ${amount}$`;
        dateP.textContent = `Date: ${date}`;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('btn', 'edit');
        buttonEdit.textContent = 'edit';
        
        const buttonOk = document.createElement('button');
        buttonOk.classList.add('btn', 'ok');
        buttonOk.textContent = 'ok';
        
        articleEl.appendChild(expenseP);
        articleEl.appendChild(amountP);
        articleEl.appendChild(dateP);
        liEl.appendChild(articleEl);

        buttonsDiv.appendChild(buttonEdit);
        buttonsDiv.appendChild(buttonOk);
        liEl.appendChild(buttonsDiv);

        previewUlEl.appendChild(liEl);

        addButton.setAttribute('disabled', 'disabled');
        inputExpenseEl.value = '';
        inputAmountEl.value = '';
        inputDateEl.value = '';

        buttonEdit.addEventListener('click', () => {
            inputExpenseEl.value = expense;
            inputAmountEl.value = amount;
            inputDateEl.value = date;

            liEl.remove();
            addButton.removeAttribute('disabled');
        })

        buttonOk.addEventListener('click', () => {
            buttonsDiv.remove();
            expensesListUlEl.appendChild(liEl);
            addButton.removeAttribute('disabled');
        })

        deleteButton.addEventListener('click', () => {
            expensesListUlEl.innerHTML = '';
        })
    })
}

function attachEventsListeners() {
    const convertButtons = document.querySelectorAll('input[value="Convert"]');
    convertButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const divEl = e.currentTarget.closest('div');
            const labelEl = divEl.querySelector('label');

            const inputDays = document.querySelector('input#days');
            const inputHours = document.querySelector('input#hours')
            const inputMinutes = document.querySelector('input#minutes')
            const inputSeconds = document.querySelector('input#seconds')

            if(labelEl.textContent === 'Days: ') {
                inputHours.value = inputDays.value * 24;
                inputMinutes.value = inputDays.value * 24 * 60;
                inputSeconds.value = inputDays.value * 24 * 60 * 60;

            } else if(labelEl.textContent === 'Hours: ') {
                inputDays.value = inputHours.value / 24;
                inputMinutes.value = inputHours.value * 60;
                inputSeconds.value = inputHours.value * 60 * 60;

            } else if(labelEl.textContent === 'Minutes: ') {
                inputDays.value = inputMinutes.value / 60 / 24;
                inputHours.value = inputMinutes.value / 60;
                inputSeconds.value = inputMinutes.value * 60;
                
            } else if(labelEl.textContent === 'Seconds: ') {
                inputDays.value = inputSeconds.value / 60 / 60 / 24;
                inputHours.value = inputSeconds.value / 60 / 60;
                inputMinutes.value = inputSeconds.value / 60;
            } 
        })
    })
}

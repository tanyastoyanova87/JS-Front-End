function attachGradientEvents() {
    const gradientEl = document.querySelector('#gradient');
    const resultEl = document.querySelector('#result');

    gradientEl.addEventListener('mousemove', (e) => {
        const currentPosition = e.offsetX;
        const elWidth = e.currentTarget.clientWidth;
        const percent = Math.floor((currentPosition / elWidth) * 100);

        resultEl.textContent = `${percent}%`;
    });
}

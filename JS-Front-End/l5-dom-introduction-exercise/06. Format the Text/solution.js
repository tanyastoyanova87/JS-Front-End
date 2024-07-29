function solve() {
    const inputTextEl = document.querySelector('#input');
    const outputTextEl = document.querySelector('#output');

    function createParagraphEl(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
    }

    const sentences = inputTextEl.value.split('.').filter(Boolean).map((sentence) => sentence.trim());

    for (let i = 0; i < sentences.length; i+=3) {
        let sentencesParagraph = sentences.slice(i, i + 3).join('. ').concat('.');
        let currentParagraph = createParagraphEl(sentencesParagraph);
        outputTextEl.appendChild(currentParagraph);
    }
}

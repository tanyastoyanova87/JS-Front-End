function extractText() {
    let liElements = document.getElementById('items');
    let textAreaElement = document.getElementById('result');

    const result = liElements.innerText;
    textAreaElement.textContent = result;

    // let liElements = document.getElementById('items');
    // let textAreaElement = document.getElementById('result');

    // const result = liElements
    //     .textContent
    //     .split('\n')
    //     .map(x => x.trim())
    //     .join('\n')
    //     .trim();

    // textAreaElement.textContent = result;
}

function extract(content) {
    const textElement = document.getElementById(content);

    const regex = /\(([^()]+)\)/g;
    const arr = textElement.textContent.match(regex);

    Array.from(arr);
    
    return arr.join('; ');
}

function encodeAndDecodeMessages() {
    const [encode, decode] = document.querySelectorAll('button');
    const [textarea, disabledTextarea] = document.querySelectorAll('textarea');

    encode.addEventListener('click', () => {
        disabledTextarea.value = textarea
            .value
            .split('')
            .map(character => String.fromCharCode(character.charCodeAt(0) + 1))
            .join('');
            
        textarea.value = '';
    });

    decode.addEventListener('click', () => {
        disabledTextarea.value = disabledTextarea
            .value
            .split('')
            .map(character => String.fromCharCode(character.charCodeAt(0) - 1))
            .join('');
    })
}

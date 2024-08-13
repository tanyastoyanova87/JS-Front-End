function encodedCryptoCurrency(input) {
    let encodedMessage = input.shift();

    let commandLine = input.shift();
    while (commandLine !== 'Buy') {
        const [command, ...args] = commandLine.split('?');
        switch (command) {
            case 'Buy': {
                console.log(`The cryptocurrency is: ${newMsg}`);
                break;
            }

            case 'TakeEven':
                let newMsg = '';
                for (let i = 0; i < encodedMessage.length; i++) {
                    if (i % 2 === 0) {
                        newMsg += encodedMessage[i];
                    }
                }
                encodedMessage = newMsg;
                console.log(newMsg);

                break;
            case 'ChangeAll':
                const substringToReplace = args[0];
                const replacement = args[1];
                if (encodedMessage.includes(substringToReplace)) {
                    while (encodedMessage.includes(substringToReplace)) {
                        encodedMessage = encodedMessage.replace(substringToReplace, replacement);
                    }
                }
                console.log(encodedMessage);

                break;
            case 'Reverse':
                let substring = args[0];

                if (encodedMessage.includes(substring)) {
                    encodedMessage = encodedMessage.replace(substring, '');
                    let reversed = substring.split('').reverse().join('');
                    encodedMessage += reversed;

                    console.log(encodedMessage);
                } else {
                    console.log('error');
                }
                break;
        }
        commandLine = input.shift();
    }
    console.log(`The cryptocurrency is: ${encodedMessage}`);
}


encodedCryptoCurrency((["PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"])


)

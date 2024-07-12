function passwordValidator(password) {

    function passwordLength(password) {
        const minLength = 6;
        const maxLength = 10;
        return password.length >= minLength && password.length <= maxLength;
    }

    function passIncludesOnlyLettersAndDigits(password) {
        const regex = /^[A-Za-z\d]+$/g;
        return regex.test(password)
    }

    function passwordHasAtLeastTwoDigits(password) {
        const minLength = 2;
        const regex = /[\d]/g;
        let array = password.match(regex);

        if (array === null) {
            return false;
        } else {
            return array.length >= minLength;
        }
    }

    function getMessages() {

        const messages = [];

        if (!passwordLength(password)) {
            messages.push(`Password must be between 6 and 10 characters`);
        }

        if (!passIncludesOnlyLettersAndDigits(password)) {
            messages.push(`Password must consist only of letters and digits`);
        }

        if (!passwordHasAtLeastTwoDigits(password)) {
            messages.push(`Password must have at least 2 digits`);
        }

        if (!messages.length) {
            messages.push(`Password is valid`);
        }

        return messages;
    }
    
    getMessages().forEach((msg) => console.log(msg));
}

passwordValidator('logIn')

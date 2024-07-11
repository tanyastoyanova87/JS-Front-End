function repeatString(string, countRepeat) {
    // console.log(string.repeat(countRepeat));

    let result = '';
    for (let i = 0; i < countRepeat; i++) {
        result += string;
    }

    return result;
}

repeatString("abc", 3);

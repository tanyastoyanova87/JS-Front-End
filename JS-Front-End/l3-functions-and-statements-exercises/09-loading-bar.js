function loadingBar(number) {
    let output = '';
    const maxSymbols = 10;

    if (number === 100) {
        output = '100% Complete!\n[%%%%%%%%%%]'
    } else {
        let percentsCount = number / 10;
        let percentPattern = '%'.repeat(percentsCount);
        let dotsPattern = `.`.repeat(maxSymbols - percentsCount);

        output = `${number}% [${percentPattern}${dotsPattern}]\nStill loading...`
    }

    console.log(output);
}

loadingBar(40);

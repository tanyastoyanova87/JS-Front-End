function solve() {
    const shoppingCartEl = document.querySelector('.shopping-cart');
    let resultTextareaEl = document.querySelector('textarea');
    const buttonCheckout = document.querySelector('button.checkout');

    let products = [];
    shoppingCartEl.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' || e.target.textContent.trim() !== 'Add') {
            return;
        }

        const productEl = e.target.closest('.product');
        const name = productEl.querySelector('.product-title').textContent;
        const price = Number(productEl.querySelector('.product-line-price').textContent);

        products.push({
            name,
            price,
        })

        resultTextareaEl.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
    });

    buttonCheckout.addEventListener('click', () => {
        const totalPrice = products.reduce((price, product) => price + product.price, 0);

        const uniqueProducts = Array.from(new Set(products.map(product => product.name))).join(', ');
        resultTextareaEl.value += `You bought ${uniqueProducts} for ${totalPrice.toFixed(2)}.`

        const buttons = shoppingCartEl.querySelectorAll('button');
        buttons.forEach(button => button.setAttribute('disabled', 'disabled'));
    })
}

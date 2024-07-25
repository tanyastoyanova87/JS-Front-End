function storeProvision(stockProducts, orderedProducts) {
    let allProducts = {};
    for (let i = 0; i < stockProducts.length; i++) {
        if (i % 2 === 0) {
            let product = stockProducts[i];
            let quantity = stockProducts[i + 1];
            allProducts[product] = quantity;
        } 
    } 
    
    for (let i = 0; i < orderedProducts.length; i++) {
        if (i % 2 === 0) {
            let product = orderedProducts[i];
            let quantity = orderedProducts[i + 1];
            if(allProducts.hasOwnProperty(product)) {
                allProducts[product] = Number(allProducts[product]) + Number(quantity);
            } else {
                allProducts[product] = quantity;
            }
        } 
    } 
    
    for (const product in allProducts) {
        console.log(`${product} -> ${allProducts[product]}`)
    }
}

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    
)

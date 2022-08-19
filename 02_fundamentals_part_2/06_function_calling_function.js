"use strict";

function fruitCutter(fruit) {
    return 4 * fruit;
}

function fruitChatMaker(apple, oranges) {
    const applePieces = fruitCutter(apple);
    const orangePieces = fruitCutter(oranges);

    let finalProduct;
    finalProduct = `This is fruit chat maker and its components are ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return finalProduct;
}

console.log(fruitChatMaker(4, 5));
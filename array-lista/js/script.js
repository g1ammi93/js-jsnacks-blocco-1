const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

console.table(fruits);

fruits.push('pesca');

let isFound = false;

for (let i = 0; i < fruits.length && !isFound; i++) {
    const currentFruit = fruits[i];
    
    let message = "Oh no, devo uscire a comprare il cocomero!"
    
    if (currentFruit === 'cocomero') {
        message = "Trovato! Devo solo preparare il cocktail."
        isFound = true; 
    } 

    console.log(message)

   
}
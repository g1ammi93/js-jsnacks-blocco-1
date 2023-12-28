// Recupero elementi in pagina

const btn = document.getElementById('btn');
const totalNumbersElement = document.getElementById('total-number'); 
const userNumbersElement = document.getElementById('user-number')
const errorTotalNumber = document.getElementById('error-total');
const errorUserNumber = document.getElementById('error-user-number')
const result = document.getElementById('result');
const numbers = []
const label = document.getElementById ('label')
const userLabel = document.getElementById ('user-label')

// Al click del bottone...

btn.addEventListener('click', function () {
    const number = parseInt(totalNumbersElement.value);
    const numberToShow = parseInt(userNumbersElement.value)
    const numberStamp = number - numberToShow 
    let message = ''

    //  Validazione


    let isValid = true; 
    let isValidSecond = true;
    
    if (isNaN(number) || number <= 5) {
        isValid = false;
    }   else if (isNaN(numberToShow) || numberToShow < 0 || numberToShow > number) {
        isValidSecond = false;
    }

    if (!isValid) {
        message = 'Inserisci un numero maggiore di 5';
        errorTotalNumber.innerText = message;
        totalNumbersElement.classList.add('is-invalid');
        return;
    } 
    if (!isValidSecond) {
        message = 'Il valore deve essere maggiore di zero ed inferiore al numero scelto sopra';
        errorUserNumber.innerText = message;
        userNumbersElement.classList.add('is-invalid');
        return;
    }

    
    errorTotalNumber.innerText = '';
    totalNumbersElement.classList.remove('is-invalid');
    totalNumbersElement.classList.add('is-valid');
    errorUserNumber.innerText = '';
    userNumbersElement.classList.remove('is-invalid');
    userNumbersElement.classList.add('is-valid');

    
    // Inserisco i numeri random nell'array in base a quanti ne sceglie l'utente
    for (let i = 1; i <= number; i++) {
        const randomNumbers = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumbers);
    }

    message = `Gli ultimi ${numberToShow} numeri della tua lista sono: <ul>`

    // Stampo i numeri
    for (let i = numberStamp; i < numbers.length; i++) {
        message += `<li>${numbers[i]}</li>`;
        console.log(i);
    };

    //Risultato finale in pagina

    message += '</ul>';
    result.innerHTML = message;
    console.table(numbers);

    if(isValid === true, isValidSecond === true) {
        btn.classList.add('d-none')
        totalNumbersElement.classList.add('d-none')
        userNumbersElement.classList.add('d-none')
        label.classList.add('d-none')
        userLabel.classList.add('d-none')
    }
    
});
// funzioni ed event listener per selezionare la difficoltá
let max;

let button1 = document.getElementById('mode1');

let button2 = document.getElementById('mode2');

let button3 = document.getElementById('mode3');

button1.addEventListener('click', () => {
    mode1();
    array();
    begin();
});

button2.addEventListener('click', () => {
    mode2();
    array();
    begin();
});

button3.addEventListener('click', () => {
    mode3();
    array();
    begin();
});





function mode1() {
    max = 100;
    console.log(max);
}

function mode2() {
    max = 80;
    console.log(max);
}

function mode3() {
    max = 50;
    console.log(max);
}





let randomArray = [];

const min = 1;

function array() {
    for(let i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
        if(!randomArray.includes( randomNumber )) {
            randomArray.push( randomNumber );
    
        } else {
            i--;
        }
    }
    
    console.log(randomArray);
}





let arrayInseriti = [];

let numeroInserito;

let u = 0;

function begin() {
    do {
        numeroInserito = parseInt(prompt('Inserisci numero'));
        if(!arrayInseriti.includes( numeroInserito )) {
            arrayInseriti.push( numeroInserito );
            u++;
        } else if(arrayInseriti.includes( numeroInserito )) {
            alert('Numero giá inserito');
        }
        
        if(randomArray.includes( numeroInserito )) {
            alert('Hai perso');
            document.getElementById('titolo').innerHTML = randomArray;
            document.getElementById('numero').innerHTML = `Il numero ${numeroInserito} é giá presente`;
            break;
        }
    } while (!randomArray.includes( numeroInserito ) && u < max-16);
    
    console.log(arrayInseriti);

    if(arrayInseriti.length = max-16) {
        alert('Hai vinto!')
    }
}
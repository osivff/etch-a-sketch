const container = document.querySelector('.container');
const erase = document.querySelector('.erase');
const sizeBtn = document.querySelector('.btn-size');
let userInput = 16;

function createBoard(size) {
    for(i = 0; i < size; i++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for(j = 0; j < size; j++){
            const col = document.createElement('div');
            col.setAttribute('class', 'col');
            row.appendChild(col);
        }
    }
};

createBoard(userInput);

function updateBoard(){
    const row = document.querySelectorAll('.row');
    for(i = 0; i <= row.length - 1; i++){
        container.removeChild(row[i]);
    }
};

function createNewBoard(){
    userInput = parseInt(prompt('Choose a size for your board'));
    if(isNaN(userInput)) {
        userInput = prompt('Please type a number btween 1 and 50: ');
    } else if (userInput > 50){
        userInput = prompt('The number is too big. Enter a num between 1 adn 50: ');
    } else if(userInput <= 0) {
        userInput = prompt('Please enter a larger size: ');
    }
    updateBoard();
    createBoard(userInput);
};

function eraseCol(){
    let col = document.querySelectorAll('.col');
    for(i = 0; i <= col.length -1; i++){
        col[i].style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
};

function randomColor(){
    let randomNum = Number(Math.floor((Math.random() * 255)) + 1);
    return randomNum;
};

sizeBtn.addEventListener('click', createNewBoard);

let initialNum = 0.1
let currentOpacity = parseFloat(initialNum.toFixed(1)); 

container.addEventListener('mouseover', (e) => {
    if(e.target.className === 'col') {
        let red = randomColor();
        let green = randomColor();
        let blue = randomColor(); 
        let addNumber = 0.1;
        if(currentOpacity >= 0.1 && currentOpacity <= 0.9){
            e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${currentOpacity})`;
            currentOpacity = currentOpacity + parseFloat(addNumber.toFixed(1));
        } else{
            currentOpacity = parseFloat(initialNum.toFixed(1));
        };
    };
});

erase.addEventListener('click', eraseCol);
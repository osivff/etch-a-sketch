const section = document.querySelector('section');
const erase = document.querySelector('.erase');
const sizeBtn = document.querySelector('.btn-size');
let userInput = 16;

function createBoard(size) {
    for(i = 0; i < size; i++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        section.appendChild(row);
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
        section.removeChild(row[i]);
    }
};

function createNewBoard(){
    userInput = parseInt(prompt('Choose a size for your board'));
    if(isNaN(userInput)) {
        userInput = prompt('Please type a number btween 1 and 50: ');
    } else if (userInput > 50){
        userInput = prompt('Please enter a size between 1 and 50: ');
    } else if(userInput <= 0) {
        userInput = prompt('Please enter a larger size: ');
    }
    updateBoard();
    createBoard(userInput);
};

function eraseCol(){
    let col = document.querySelectorAll('.col');
    for(i = 0; i <= col.length -1; i++){
        col[i].style.backgroundColor = 'white';
    }
};

sizeBtn.addEventListener('click', createNewBoard);

section.addEventListener('mouseover', (e) => {
    if(e.target.className === 'col') {
        e.target.style.backgroundColor = "black";
    }
});

erase.addEventListener('click', eraseCol);
const container = document.querySelector('.container');
const clearCanvas = document.querySelector('.clear-canvas');
const sizeBtn = document.querySelector('.btn-size');
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
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
        userInput = prompt('Please type a number between 1 and 100: ');
    } else if (userInput > 100){
        userInput = prompt('The number is too big. Enter a num between 1 and 100: ');
    } else if(userInput <= 0) {
        userInput = prompt('The number is too small. Please type a number between 1 and 100: ');
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

container.addEventListener('mouseover', (e) => {
    if(e.target.className === 'col'){
        e.target.style.backgroundColor = 'black';
    }
});

blackBtn.addEventListener('click', () => {
    container.addEventListener('mouseover', (e) => {
        if(e.target.className === 'col'){
            e.target.style.backgroundColor = 'black';
        }
    })
})

rainbowBtn.addEventListener('click', () => {
    container.addEventListener('mouseover', (e) => {
        if(e.target.className === 'col') {
            let red = randomColor();
            let green = randomColor();
            let blue = randomColor(); 
                e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        };
    });
});



clearCanvas.addEventListener('click', eraseCol);
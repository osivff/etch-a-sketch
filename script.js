const section = document.querySelector('section');
const erase = document.querySelector('button');

for(i = 0; i <= 15; i++){
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    section.appendChild(row);
    for(j = 0; j <= 15; j++){
        const col = document.createElement('div');
        col.setAttribute('class', 'col');
        row.appendChild(col);
    }
}

const col = document.querySelectorAll('.col');

section.addEventListener('mouseover', (e) => {
    if(e.target.className === 'col') {
        e.target.style.backgroundColor = "black";
    }
});

erase.addEventListener('click', () => {
    for(i = 0; i <= col.length -1; i++){
        col[i].style.backgroundColor = 'white';
    }
});




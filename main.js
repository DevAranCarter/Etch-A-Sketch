let container = document.querySelector('#container')
let etchContainer = document.querySelector("#etch-container");
let initialSize = 16;

createGrid(initialSize);

let updatebtn = document.getElementById('incPix');

function removeGrid() {
    let row = document.querySelectorAll('.row');
    row.forEach(e => {
        e.parentNode.removeChild(e);
        
    });
}

function updatePixels() {
    let newSize = prompt('How many pixels do you want to have?');
    if (newSize <= 100) {
    removeGrid();
    createGrid(newSize); }
    else {
        alert("Pixels must be 100 or less!");
        updatePixels();
    }
}

updatebtn.addEventListener("click", updatePixels);

function createGrid(size) {

    let heightSize = 610 / (size);
    let widthSize = 610 / (size);

let divs = document.createElement('div');
let innerDivs = document.createElement('div');

for (let i = 0; i <= size; i++) {
    divs = document.createElement('div');
    divs.classList.add('row'); 
    etchContainer.appendChild(divs);
    for (let j = 0; j <= size; j++) {
        innerDivs = document.createElement('div');
        innerDivs.classList.add('column');
        innerDivs.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'blue';
        })
        innerDivs.style.minHeight = `${heightSize}px`;
        innerDivs.style.minWidth = `${widthSize}px`; 
        divs.appendChild(innerDivs);
    }
}
}


let container = document.querySelector('#container')
let etchContainer = document.querySelector("#etch-container");
let initialSize = 16;

createGrid(initialSize);

let updatebtn = document.getElementById('incPix');
let reset = document.getElementById('reset');
let multicolor = document.getElementById('multicolor');

reset.addEventListener("click", () => {
    location.reload();
})

function removeGrid() {
    let row = document.querySelectorAll('.row');
    row.forEach(e => {
        e.parentNode.removeChild(e);
        
    });
}

function updatePixels() {
    let newSize = prompt('How many pixels do you want to have?');
    if (newSize <= 100 && newSize > 0 && newSize != null) {
    console.log(newSize);
    removeGrid();
    createGrid(newSize); }
    else {
        alert("Pixels must be 100 or less!");
        updatePixels();
    }
}

updatebtn.addEventListener("click", updatePixels);

function createGrid(size) {

    let heightSize = 500 / size;
    let widthSize = 500 / size;

let divs = document.createElement('div');
let innerDivs = document.createElement('div');

for (let i = 1; i <= size; i++) {
    divs = document.createElement('div');
    divs.classList.add('row'); 
    etchContainer.appendChild(divs);
    for (let j = 1; j <= size; j++) {
        innerDivs = document.createElement('div');
        innerDivs.classList.add('column');
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let color = `rgb(${x},${y},${z})`;

        innerDivs.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = color;
        })
        innerDivs.style.minHeight = `${heightSize}px`;
        innerDivs.style.minWidth = `${widthSize}px`; 
        divs.appendChild(innerDivs);
    }
}
}


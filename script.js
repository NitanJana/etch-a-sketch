function mouseOverDiv(e) {
  e.target.style.backgroundColor = "purple";
}

function clearCanvas() {
  const container = document.querySelector('.container');
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
}

function changeCanvas(e) {
  const newNumberOfSquares = +prompt("How many squares you want per side? (Max 100)",16);

  if (newNumberOfSquares
    && newNumberOfSquares !== null
    && newNumberOfSquares !== NaN
    && newNumberOfSquares >= 3
    && newNumberOfSquares <= 100) { 
    createCanvas(newNumberOfSquares);
  } else if (isNaN(newNumberOfSquares)) {
    alert('Enter a valid number');
    createCanvas(16);
  } else if (newNumberOfSquares < 3) {
    alert('Enter a number more than 2');
    createCanvas(16); 
  } else if (newNumberOfSquares > 100) {
    alert('Enter a number less than 101');
    createCanvas(100);
  } 
  
}

function createCanvas(numberOfSquares) {
  clearCanvas();
  for (let i = 0; i < numberOfSquares**2; i++) {
  const tempDiv = document.createElement('div');
  tempDiv.classList.add('square');
  tempDiv.setAttribute('style', `width :calc(500px/${numberOfSquares});aspect-ratio: 1/1;`);
  tempDiv.addEventListener('mouseover', mouseOverDiv);
  container.appendChild(tempDiv);
  }
}

const changeCanvasBtn = document.querySelector('#changeCanvas');
const container = document.querySelector('.container');

changeCanvasBtn.addEventListener('click', changeCanvas);

createCanvas(16);


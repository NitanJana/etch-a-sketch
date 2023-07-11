const container = document.querySelector('.container');

const numberOfSquares = prompt("How many divs you want?");

for (let i = 0; i < numberOfSquares**2; i++) {
  const tempDiv = document.createElement('div');
  tempDiv.classList.add('square');
  tempDiv.setAttribute('style', `width :calc(600px/${numberOfSquares});aspect-ratio: 1/1`);
  container.appendChild(tempDiv);
  
}


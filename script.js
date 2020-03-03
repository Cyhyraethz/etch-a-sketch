const innerContainer = document.getElementById('innerContainer');
const container = document.getElementById('container');

function createGrid() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.setAttribute('onmouseover', 'changeColor(this)');
    div.className = 'item';
    container.appendChild(div);
  }
}

function changeColor(e) {
  e.id = 'newColor';
  setTimeout(function() {
    e.removeAttribute('id');
  }, 1000);
}

function resetGrid() {
  let squaresPerSide = prompt(
    'Please enter the number of squares you would like on each side of your new grid (between 1 and 100)...'
  );
  while (squaresPerSide > 100 || squaresPerSide < 1) {
    squaresPerSide = prompt(
      'Please enter the number of squares you would like on each side of your new grid (between 1 and 100)...'
    );
  }
  let totalSquares = squaresPerSide * squaresPerSide;
  container.innerHTML = '';
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  for (let i = 0; i < totalSquares; i++) {
    let div = document.createElement('div');
    div.setAttribute('onmouseover', 'changeColor(this)');
    div.className = 'item';
    container.appendChild(div);
  }
}

createGrid();

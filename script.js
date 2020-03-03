const innerContainer = document.getElementById('innerContainer');
const container = document.getElementById('container');

function createGrid() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.setAttribute('onmouseover', 'changeColor(this)');
    div.className = 0;
    container.appendChild(div);
  }
}

function changeColor(e) {
  let num = parseInt(e.className, 10);
  e.className = num + 1;
  let lightness = 50;
  if (parseInt(e.className, 10) < 10) {
    num = parseInt(e.className, 10) * 5;
    lightness = lightness - num;
  } else if (parseInt(e.className, 10) >= 10) {
    lightness = 0;
  }
  e.style.backgroundColor = `hsl(240, 100%, ${lightness}%)`;
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

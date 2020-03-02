let container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
  let div = document.createElement('div');
  div.setAttribute('onmouseover', 'changeColor(this)');
  div.className = 'item';
  container.appendChild(div);
}

function changeColor(e) {
  e.id = 'newColor';
  setTimeout(function() {
    e.removeAttribute('id');
  }, 1000);
}

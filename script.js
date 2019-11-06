let container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.className = 'item';
    container.appendChild(div);
}


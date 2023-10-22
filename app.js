let box = document.querySelector('.box'),
amount = 696;

for(let i = 0; i < amount;i++) {
    let item = document.createElement('div');
    item.classList.add('item');
    box.append(item);
    item.addEventListener('mouseover', () => setColor(item) );
    item.addEventListener('mouseleave', () => removeColor(item) );
} 
 
function setColor(el) {
    el.style.background = randomColor()
}

function removeColor(el) {
    el.style.background = ''
}

function randomColor(el) {
  let y = Math.round(Math.random() * 255);
  let x = Math.round(Math.random() * 255);
  let z = Math.round(Math.random() * 255);
  return `rgb(${y}, ${x}, ${z})`
}
 
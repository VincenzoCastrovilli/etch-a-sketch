let defaultDimension = 16;

const gridContainer = document.querySelector('#grid-container');
const replaceButton = document.querySelector('.replace')
const clearButton = document.querySelector('.clear')

const createGrid = (dimension) => {
  for(i=0; i < dimension*dimension; i++) {
    const pixel = document.createElement('div')
    pixel.classList.add('pixel');
    gridContainer.appendChild(pixel);
    pixel.style.flex = '0 0 '+ (100/dimension)+'%';
    pixel.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'blue';
    })
  }
}

const replaceGrid = () => {
  let dim = parseInt(window.prompt('DIME'))
  if (dim < 1 || dim > 64) {
    alert('AGGIUNGI UNA DIMENSONE VALIDA')
    dim = defaultDimension;
  }
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((square => {
    gridContainer.removeChild(square)
  }))
  createGrid(dim);
}

const clearGrid = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((square) => {
    square.style.removeProperty('background-color');
  })
}




createGrid(defaultDimension);

replaceButton.addEventListener('click', replaceGrid)
clearButton.addEventListener('click', clearGrid)




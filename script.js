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
      e.target.style.backgroundColor = 'black';
    })
  }
}

const replaceGrid = () => {
  let dim = parseInt(window.prompt('Dimension of the grid: (Between 1 and 64)'))
  if (dim < 1 || dim > 64) {
    alert('Add a valid dimension')
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




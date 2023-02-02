const gridContainer = document.querySelector('#grid-container');
let gridDimension = 6;


for(i=0; i < gridDimension*gridDimension; i++) {
  const pixel = document.createElement('div')
  pixel.classList.add('pixel');
  gridContainer.appendChild(pixel);
  pixel.style.flex = '0 0 '+ (100/gridDimension)+'%';
  pixel.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'blue';
  })
}





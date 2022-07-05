

const etchcontainer = document.getElementById('etchgrid');
const gridsize = document.getElementById('gridsize');
let pcolor = document.getElementById('colorpick');
//document.getElementById('colorpick').addEventListener('click', pcolor);
const rbow = document.getElementById('rainbow');

rbow.addEventListener('click', randomColor);
pcolor.addEventListener('click', changeColor);
// Math.floor(Math.random() * (max - min + 1)) + min // 256 rgb

gridsize.addEventListener('keydown', (e) => { 
    
    if ((e.key == 'Enter') && gridsize.value <= 100){
        etchcontainer.innerHTML = "";
   mkgrid(gridsize.value)   
    }   
});



mkgrid(10);
changeColor();
 

function mkgrid(gsize){
for(let i = 0; i < gsize**2; ++i){

    
    let cell = document.createElement('div');
    cell.classList.add('cell');
  //  cell.addEventListener('mousedown', changeColor);
    cell.style.flexBasis = (600/gsize)+'px';
    etchcontainer.appendChild(cell);

    

    document.getElementById('showgrid').addEventListener('click', showGrid);
    

    }
}



function changeColor(){
        
    let scell = document.querySelectorAll('.cell');

            [...scell].forEach(item => {

    item.addEventListener('mouseenter', () =>

    item.style.backgroundColor=pcolor.value)

})}

function showGrid(){
            let scell = document.querySelectorAll('.cell');

            [...scell].forEach(item => {
            item.classList.toggle('border');
        })
        };


        function randomColor(){


        
    
             let scell = document.querySelectorAll('.cell');
    
                [...scell].forEach(item => {


            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
    
            item.addEventListener('mouseenter', () =>
        
            item.style.backgroundColor='rgb(' + [r,g,b].join(',') + ')');
    
                });
    
    
    }


    
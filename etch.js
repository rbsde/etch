const etchcontainer = document.getElementById('etchgrid');
const gridsize = document.getElementById('gridsize');

// Math.floor(Math.random() * (max - min + 1)) + min // 256 rgb

gridsize.addEventListener('keydown', (e) => { 
    
    if ((e.code == 'Enter') && gridsize.value < 100){
        etchcontainer.innerHTML = "";
   mkgrid(gridsize.value)   
    }   
});



 

function mkgrid(gsize){
for(let i = 0; i < gsize**2; ++i){

    
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mousedown', changeColor);
    cell.addEventListener('mouseenter', changeColor);
    cell.style.flexBasis = (600/gsize)+'px';
    etchcontainer.appendChild(cell);

    function changeColor(e){
        console.log(e.type);
        
        cell.style.backgroundColor='black';
   
    }
}
}
//randomcolor


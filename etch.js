const etchcontainer = document.getElementById('etchgrid');
const gridsize = document.getElementById('gridsize');
let pcolor = document.getElementById('colorpick');
//document.getElementById('colorpick').addEventListener('click', pcolor);


// Math.floor(Math.random() * (max - min + 1)) + min // 256 rgb

gridsize.addEventListener('keydown', (e) => { 
    
    if ((e.key == 'Enter') && gridsize.value <= 100){
        etchcontainer.innerHTML = "";
   mkgrid(gridsize.value)   
    }   
});




 

function mkgrid(gsize){
for(let i = 0; i < gsize**2; ++i){

    
    let cell = document.createElement('div');
    cell.classList.add('cell');
  //  cell.addEventListener('mousedown', changeColor);
    cell.addEventListener('mouseenter', changeColor);
    cell.style.flexBasis = (600/gsize)+'px';
    etchcontainer.appendChild(cell);

    

    document.getElementById('showgrid').addEventListener('click', showGrid);
    


    function changeColor(){
        
        
        cell.style.backgroundColor=pcolor.value;
   
    }


   // let rainbow= document.getElementById('rainbow').addEventListener('click', randomColor());



    function randomColor(){


        //cell.removeEventListener('mouseenter', changeColor);
         //cell.addEventListener('mouseenter', randomColor);

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
        cell.style.backgroundColor='rgb(' + [r,g,b].join(',') + ')';

    }


}
}


//randomcolor
//pickcolor



function showGrid(){
            let scell = document.querySelectorAll('.cell');

            [...scell].forEach(item => {
            item.classList.toggle('border');
        })
        };
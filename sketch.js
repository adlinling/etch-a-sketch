

let linecolor = "black";

let isMouseDown = false;

let newgridbtn = document.querySelector("#reset");

newgridbtn.addEventListener("click", () =>{
    console.log("Make new grid");
    numofsquares = prompt("Enter number of squares per side for the new grid", 16);

    let gridcontainer = document.querySelector("#gridcontainer");

    gridcontainer.innerHTML = "";
    
    makegrid(numofsquares);
})



function draw(target){
  
  let initialcolor = target.style.backgroundColor;
  let opacity = target.style.opacity;

  console.log("Initial color: " + initialcolor);
  console.log("Opacity: " + opacity);

  
  if(!initialcolor){

    let r = Math.random()*255;   
    let g = Math.random()*255;   
    let b = Math.random()*255;  
    
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    target.style.opacity = "0.1";

  }else{

    target.style.backgroundColor = initialcolor;

    //convert to number
    let opnum = +opacity;

    if(opnum < 1){
      opnum +=  0.1;
    }

    target.style.opacity = opnum;

  }
}

function makegrid(numofsquares){
    
  let gridcontainer = document.querySelector("#gridcontainer");

  let rows = numofsquares;

  if(rows > 100){
      rows = 100;
  }

  let columns = rows;
  let rowdivs;


  //let containerwidthpct = gridcontainer.style.width.replace("%", "");
  //let containerwidthpx = window.innerWidth*containerwidthpct/100;

  let containerwidthpx = gridcontainer.style.width;

 
  //Since the grid is a square, the height equals the width
  let containerheight = containerwidthpx;

  console.log("Container width:" + containerwidthpx);
  console.log("Container height:" + containerheight);

  
  let rowheight = containerheight.replace("px","")/rows;

  console.log("Row height:" + rowheight);


  let columnwidth = rowheight;

  console.log("Column width:" + columnwidth);


  for(let i=1;i<=rows;i++){

    console.log(`row ${i}`)

    rowdivs = document.createElement('div');
    rowdivs.setAttribute("class", "row");
    rowdivs.style.display = "flex";
    rowdivs.style.height = rowheight + "px";
    
    rowdivs.style.justifyContent = "center";
    //rowdiv.style.backgroundColor = "yellow";
    //rowdiv.textContent = i;

    for(let j=1;j<=columns;j++){

      columndiv = document.createElement('div');
      columndiv.setAttribute("class", "cell");
      columndiv.setAttribute("id", i + "" + j);

      columndiv.style.width = columnwidth + "px";
      //columndiv.style.height = rowheight + "px";
      //columndiv.style.border = "1px pink solid";
      columndiv.style.display = "flex";
      columndiv.style.justifyContent = "center";
      //columndiv.textContent = "x";

      rowdivs.appendChild(columndiv);

    }

    gridcontainer.appendChild(rowdivs);

  }

}


makegrid(16);

document.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});


gridcontainer.addEventListener("mousedown", (event) => {

    let target = event.target;

    if(target.id !== "gridcontainer"){

      draw(target);
    }

})

gridcontainer.addEventListener("mouseover", (event) => {

  let target = event.target;

  console.log("mouse is over cell: " + target.id);
  console.log("mousedown: " + isMouseDown);

  if(isMouseDown){

    if(target.id !== "gridcontainer"){

      draw(target);
 
    }
    
  }

})





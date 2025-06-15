


let isMouseDown = false;

let btn = document.querySelector("#reset");

btn.addEventListener("click", () =>{
    console.log("Make new grid");
})


function makegrid(numofsquares){
    
  let gridcontainer = document.querySelector("#gridcontainer");

  let rows = numofsquares;

  if(rows > 100){
      rows = 100;
  }

  let columns = rows;
  let rowdivs;


  let containerwidthpct = gridcontainer.style.width.replace("%", "");
  let containerwidthpx = window.innerWidth*containerwidthpct/100;

  //Since the grid is a square, the height equals the width
  let containerheight = containerwidthpx;

  //Need to decrease height of each row div by 3px in order fit without spill over
  let rowheight = (containerheight/rows) - 3;

  let columnwidth = (containerwidthpx/rows);

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
      //columndiv.style.border = "1px pink solid";
      columndiv.style.display = "flex";
      columndiv.style.justifyContent = "center";
      columndiv.textContent = i;

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
    target.style.backgroundColor = "green";

})

gridcontainer.addEventListener("mouseover", (event) => {

  let target = event.target;

  console.log("mouse is over cell: " + target.id);
  console.log("mousedown: " + isMouseDown);

  if(isMouseDown){
    target.style.backgroundColor = "green";
  }

})





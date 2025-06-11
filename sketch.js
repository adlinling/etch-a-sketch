
let gridcontainer = document.querySelector("#gridcontainer");

let rows = 16;
let columns = 16;
let rowdiv;


let containerwidthpct = gridcontainer.style.width.replace("%", "");
let containerwidthpx = window.innerWidth*containerwidthpct/100;

//Since the grid is a square, the height equals the width
let containerheight = containerwidthpx;

//Need to decrease height of each row div by 3px in order fit without spill over
let rowheight = (containerheight/rows) - 3;

let columnwidth = (containerwidthpx/rows);

for(let i=1;i<=rows;i++){

  console.log(`row ${i}`)

  rowdiv = document.createElement('div');
  rowdiv.style.display = "flex";
  rowdiv.style.height = rowheight + "px";
  
  rowdiv.style.border = "1px blue solid";
  rowdiv.style.justifyContent = "center";
  rowdiv.style.backgroundColor = "yellow";
  //rowdiv.textContent = "";

  for(let j=1;j<=columns;j++){

    columndiv = document.createElement('div');
    columndiv.style.width = columnwidth + "px";
    columndiv.style.border = "1px pink solid";
    columndiv.style.display = "flex";
    columndiv.style.justifyContent = "center";
    columndiv.textContent = j;

    rowdiv.appendChild(columndiv);

  }

  gridcontainer.appendChild(rowdiv);

}

const grid = document.querySelector("#grid"); 


let pixelCount = 4; 
const gridWidth = grid.offsetWidth;
console.log("width: " + gridWidth);

let pixelSize = gridWidth/pixelCount; 
console.log("pixel size: " + pixelSize);
for (let a = 0; a < pixelCount; a++){
    for (let b = 0; b < pixelCount; b++){
        const square = document.createElement("div"); 
        square.className = "pixel";
        square.style.width = pixelSize + "px";
        square.style.height = pixelSize + "px";
        grid.appendChild(square);   
    }
}
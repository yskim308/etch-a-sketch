function generateGrid(pixelCount){
    const grid = document.querySelector("#grid"); 
    const gridWidth = grid.clientWidth;
    let pixelSize = gridWidth/pixelCount; 
    console.log(gridWidth); 
    console.log(pixelSize);
    for (let a = 0; a < pixelCount; a++){
        for (let b = 0; b < pixelCount; b++){
            const square = document.createElement("div"); 
            square.className = "pixel";
            square.style.width = pixelSize + "px";
            square.style.height = pixelSize + "px";
            square.addEventListener('mouseover', () => {
                square.classList.remove('pixel'); 
                square.classList.add('pixel_mouseDown');     
            });
            grid.appendChild(square);   
        }
    }
}

function removeGrid(){
    const grid = document.querySelectorAll(".pixel, .pixel_mouseDown");
    grid.forEach((element) => {
        element.remove(); 
    })
}

generateGrid(50); 

let value = document.querySelector("#value"); 
let input = document.querySelector("#gridInput"); 
input.addEventListener("input", () => {
    value.textContent = "Grid Pixel Count: " + input.value;
})
input.addEventListener("mouseup", () => {
    removeGrid(); 
    generateGrid(input.value)
})



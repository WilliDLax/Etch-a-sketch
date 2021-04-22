const container = document.querySelector("#container");
const button = document.querySelector("button");

//make 16x16 grid using css grid
for (let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);

        cell.addEventListener("mouseover", changeColor);
    }
}

//changes color when mouse hovers
function changeColor(e){
    let random = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = random;
}

//makes a new grid using the parameters as dimensions
function makeGrid(size){
    document.documentElement.style.setProperty("--size", size);
    const newContainer = document.createElement("div");
    newContainer.id = "container";
    document.body.appendChild(newContainer);

    for (let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            newContainer.appendChild(cell);
    
            cell.addEventListener("mouseover", changeColor);
        }
    }
}

//clears grid and asks for new dimensions
button.onclick = function(){
    let newSize = prompt("Choose a new size for the grid");

    if(newSize > 65) alert("That's too much");
    else if(isNaN(parseInt(newSize))) alert("Please use a number");
    else{
        document.querySelector("#container").remove();
        makeGrid(newSize);
    }
};
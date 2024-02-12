const container = document.querySelector("#grid-container");
const widthinput = document.querySelector(".width");
const heightinput = document.querySelector(".height");
const enterbtn = document.querySelector(".enterbtn");
const eraser = document.querySelector("#eraserchbx");

const DRAWCOLOR = "background-color: black";
const ERASECOLOR = "background-color: transparent";

let pixels = new Array();

enterbtn.addEventListener("click", Start)

setDefaultValues();
Start();

function setDefaultValues()
{
    widthinput.value = 16;
    heightinput.value = 16;
}

function Start()
{
    const width = Number(widthinput.value);
    const height = Number(heightinput.value);

    ClearGrid();
    GenerateGrid(width, height)
}

function GenerateGrid(width, height)
{
    for(let w = 0; w < width; w++)
    {
        let hGrid = document.createElement("div");
        hGrid.classList.add("h-grid");
        container.appendChild(hGrid);

        for(let h = 0; h < height; h++)
        {
            let vGrid = document.createElement("div");
            vGrid.classList.add("v-grid");
            hGrid.appendChild(vGrid);
            pixels.push(hGrid);
        }
    }
    addEventListener();
}

function addEventListener()
{
    for(let i = 0; i < pixels.length; i++)
    {
        if(pixels[i])
        pixels[i].addEventListener
        ("mouseover", (Event) => 
        {
            if(mouseDown)
            color(Event);
        });
        pixels[i].addEventListener("mousedown", color);
    }
}

function color(Event)
{
    let erasing = eraser.checked;
    if(erasing)
    {
        Event.target.style = ERASECOLOR;
    }
    else
    {
        Event.target.style = DRAWCOLOR;
    }
}

function ClearGrid()
{
    while(container.firstChild != null)
    {
        container.firstChild.remove();
    }
}

let mouseDown = false;
document.body.onmousedown = function() { 
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}
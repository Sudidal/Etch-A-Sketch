const container = document.querySelector("#grid-container");
const widthinput = document.querySelector(".width");
const heightinput = document.querySelector(".height");
const enterbtn = document.querySelector(".enterbtn");

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
    const width = widthinput.value;
    const height = heightinput.value;
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
        }
    }
}

function ClearGrid()
{
    while(container.firstChild != null)
    {
        container.removeChild(container.firstChild);
    }
}
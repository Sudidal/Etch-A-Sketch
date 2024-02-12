const container = document.querySelector("#grid-container");
GenerateGrid(10, 10);
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
const seedColorEl = document.getElementById("seedColor");
const btnEl = document.getElementById("btn");
const colorsShown = document.getElementById("colorsShown");


btnEl.addEventListener("click", function() {
    const bareColor = [];
    const hexvalue = seedColorEl.value.replace("#", "");
    console.log(hexvalue);
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexvalue}&mode=monochrome&count=5`)
    .then(response => response.json())
    .then(function(data) {
        let i = 0
        while (i < 5) {
            bareColor.push(data.colors[i].hex.value);
            i++;
        }
        renderColors(bareColor);
    })
})


function renderColors(bareColor) {
    console.log(bareColor);
    const htmlOutput = bareColor.map(function(color) {
       return  `
            <div class="color" style="background-color:${color};"></div>
        `
    }).join("");
    console.log(htmlOutput);
    colorsShown.innerHTML = htmlOutput;
}






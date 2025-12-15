const seedColorEl = document.getElementById("seedColor");
const btnEl = document.getElementById("btn");
const colorsShownEl = document.getElementById("colorsShown");
const colorThemesEl = document.getElementById("colorThemes");

btnEl.addEventListener("click", function() {
    const bareColor = [];
    const hexvalue = seedColorEl.value.replace("#", "");
    const colorThemesValue = colorThemesEl.value.toLowerCase();
    console.log(colorThemesValue);
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexvalue}&mode=${colorThemesValue}&count=5`)
    .then(response => response.json())
    .then(function(data) {
        let i = 0
        console.log(data);
        while (i < 5) {
            bareColor.push(data.colors[i].hex.value);
            i++;
        }
        renderColors(bareColor);
    })
})


function renderColors(bareColor = ["#000000", "#1A1919", "#343232", "#4F4A4A", "#6A6262"]) {
    console.log(bareColor);
    const htmlOutput = bareColor.map(function(color) {
       return  `
            <div class="color-text-wrapper">
                <div class="color" style="background-color:${color};"></div>
                <p class="color-text">${color}</div>
            </div>
        `
    }).join("");
    console.log(htmlOutput);
    colorsShownEl.innerHTML = htmlOutput;
}

renderColors();






const hex = [0, 1, 2, 3, 4, 5, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[GetRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function GetRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

const btn = document.getElementById("btn");

const color = document.getElementById("color");

function ranNum() {
    let random = Math.floor(Math.random() * 256);
    return random;
    console.log(random);
}

btn.addEventListener("click", function () {
    const red = ranNum();
    const green = ranNum();
    const blue = ranNum();
    const newColor = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.backgroundColor = newColor;
    console.log(newColor);

    color.textContent = newColor;
});
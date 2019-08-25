
const inputColor1 = document.querySelector(".inputColor1");
const inputColor2 = document.querySelector(".inputColor2");
const h3 = document.querySelector("h3");
const body = document.getElementById("canvas");

//Create "RandomColor" Button
const button = document.createElement("button");
button.style.border = "none";
button.setAttribute("class", "btn");
button.innerText = "Random Color Generator";
body.appendChild(button);


// Color to backGround and Display the initial CSS linear gradient
const setGradient = () => {
  body.style.background =
    "linear-gradient(to right, "
    + inputColor1.value
    + ", "
    + inputColor2.value
    + " )";

  h3.textContent = body.style.background + ";";
}

const randomColorGenerator = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const setRandomColor = () => {
  inputColor1.value = randomColorGenerator();
  inputColor2.value = randomColorGenerator();

  // create function for this
  button.style.background =
    "linear-gradient(to bottom, "
    + inputColor1.value
    + ", "
    + inputColor2.value
    + " )";

  setGradient();
}

setGradient();
inputColor1.addEventListener("input", setGradient);
inputColor2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);
button.addEventListener('onmouseenter', function () {
  console.log('test ojk')
})

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}


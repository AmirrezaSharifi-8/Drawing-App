/****************  CONSTANTS  ****************/
const optionsBtn = document.getElementById("option-btn");
const styleBox = document.querySelector(".styling-box");
const colorPicker = document.getElementById("colorPicker");
const strengthPicker = document.getElementById("strength");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const [w, h] = [window.innerWidth, window.innerHeight];

/****************  VARIABLES  ****************/
let isDrawing = false;
let style = "#000000";
let strength = 10;

/****************  FUNCTIONS  ****************/
const onMouseDown = () => {
  isDrawing = true;
};

const onMouseMove = (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.arc(e.x, e.y, strength, 0, Math.PI * 2, false);
    ctx.fillStyle = style;
    ctx.fill();
  }
};

const onMouseUp = () => {
  isDrawing = false;
};

const onRangeChange = (e) => {
  strength = e.target.value;
};

const onColorPickerChange = (e) => {
  style = e.target.value;
};

/****************  EVENTS  ****************/
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseup", onMouseUp);
strengthPicker.addEventListener("change", onRangeChange);
colorPicker.addEventListener("change", onColorPickerChange);
optionsBtn.addEventListener("click", () => {
  optionsBtn.classList.toggle("active");
  styleBox.classList.toggle("hidden");
});

/****************  PLAIN CODE  ****************/
canvas.width = w;
canvas.height = h;

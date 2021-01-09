import css from "./css/styles.css";
import refs from "./js/refs.js";
import colors from "./js/colors.js";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let colorSwitcher = null;

refs.startBtn.addEventListener("click", pressOnStartSwColors);

function pressOnStartSwColors() {
  colorSwitcher = setInterval(() => {
    refs.body.style.background =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  refs.startBtn.disabled = true;
}

refs.stopBtn.addEventListener("click", stopColorSwitcher);

function stopColorSwitcher() {
  if ((refs.startBtn.disabled = true)) {
    refs.startBtn.disabled = false;
    clearInterval(colorSwitcher);
  }
  return;
}

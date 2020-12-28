import css from "./css/styles.css";
import refs from "./js/refs.js";
import colors from "./js/colors.js";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(colors);

console.dir(refs.startBtn);

const colorSwitcher = setInterval(() => {
  // if ()
  let bodyBg = refs.body.style.background;
  bodyBg = colors[randomIntegerFromInterval(0, colors.length - 1)];
}, 1000);

refs.startBtn.addEventListener("click", colorSwitcher);

// function pressOnStartSwColors() {
//   refs.body.style.background =
//     colors[randomIntegerFromInterval(0, colors.length - 1)];
// }
// // console.log(
//   randomIntegerFromInterval(parseInt(FFFFFF, 16), parseInt(795548, 16)),
// );

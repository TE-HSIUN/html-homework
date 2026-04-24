//V1
// const yollow = document.querySelector("#yollow");
// const green = document.querySelector("#green");
// const red = document.querySelector("#red");
// const clearbtn = document.querySelector("#clearbtn");

// yollow.addEventListener("click", () => {
//   if (yollow.checked) {
//     clearbtn.hidden = false;
//   }
// });

// green.addEventListener("click", () => {
//   if (green.checked) {
//     clearbtn.hidden = false;
//   }
// });

// red.addEventListener("click", () => {
//   if (red.checked) {
//     clearbtn.hidden = false;
//   }
// });

// const clear_radio = () => {
//   yollow.checked = false;
//   green.checked = false;
//   red.checked = false;
// };

// clearbtn.addEventListener("click", () => {
//   console.log("clearbtn clicked");
//   clear_radio();
//   clearbtn.hidden = true;
// });

//V2
const radioBtns = document.querySelector("#radioBtns");
const radioInput = radioBtns.querySelectorAll("input");
const clearbtn = document.querySelector("#clearbtn");

radioInput.forEach((item) => {
  item.addEventListener("click", () => (clearbtn.hidden = false));
});

clearbtn.addEventListener("click", () => {
  radioInput.forEach((item) => {
    item.checked = false;
  });
  clearbtn.hidden = true;
});

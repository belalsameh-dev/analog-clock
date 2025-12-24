const pointer = {
  second: document.querySelector(".second"),
  minute: document.querySelector(".minute"),
  hour: document.querySelector(".hour"),
};
const points = document.querySelector(".points");

let hourNumber = 12;
for (let i = 0; i < 360; i += 6) {
  const point = document.createElement("span");
  point.classList.add("point");

  if ((i / 6) % 5 === 0) {
    point.classList.add("big");
    const text = document.createElement("span");
    text.className = "text";
    text.textContent = hourNumber;
    text.style.transform = `rotate(${-i}deg) translateY(2px)`;
    hourNumber === 12 ? (hourNumber = 1) : (hourNumber += 1);
    point.appendChild(text);
  }
  point.style.transform = `rotate(${i}deg) translateY(-150px)`;
  points.appendChild(point);
}

const setPointer = (pointer, deg) => {
  pointer.style.transition = deg === 0 ? "none" : "0.25s";
  pointer.style.transform = `rotate(${deg - 180}deg)`;
};

function setTime() {
  const now = new Date();

  const secDeg = now.getSeconds() * 6,
    minDeg = now.getMinutes() * 6,
    hourDeg = now.getHours() * 30 + minDeg / 12;

  setPointer(pointer.second, secDeg);
  setPointer(pointer.minute, minDeg);
  setPointer(pointer.hour, hourDeg);
}
setTime();
setInterval(setTime, 1000);

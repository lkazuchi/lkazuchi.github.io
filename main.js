const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  first.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  second.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  myWorker.onmessage = function (e) {
    result.textContent = e.data;
    console.log("Message received from worker");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}

//<link rel="stylesheet" href="style2.css" />
let j = 0;
let min = 0;
let max = 0;
const duree = 50;
let interval = setInterval(function () {
  let x = Math.random() * (max - min) + min;
  let y = Math.random() * (max - min) + min;
  first.postMessage([first.value, second.value]);
  second.postMessage([first.value, second.value]);
  console.log("Messages posted to worker");
  if (++j === duree) {
    clearInterval(interval);
  }
}, 1000);

function drawCircle(x, y) {
  const c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(10 * x, 10 * y, 5, 0, 2 * Math.PI);
  console.log(x, y);
  ctx.stroke();
}

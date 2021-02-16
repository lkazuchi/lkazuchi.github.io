onmessage = function (e) {
  console.log("Worker: Message received from main script");
  const result = e.data[0] * e.data[1];
  let x = Math.random() * (max - min) + min;
  let y = Math.random() * (max - min) + min;
  drawSpot(x, y);
  if (isNaN(result)) {
    postMessage("Please write two numbers");
  } else {
    const workerResult = "Result: " + result;
    console.log("Worker: Posting message back to main script");
    postMessage(workerResult);
  }
};

const min = 400;
const max = 400;

function drawSpot(x, y) {
  const c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(10 * x, 10 * y, 5, 0, 2 * Math.PI);
  console.log(x, y);
  ctx.stroke();
}

function drawCircle(x, y) {
  const c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(10 * x, 10 * y, 5, 0, 2 * Math.PI);
  ctx.stroke();
}

onmessage = function (e) {
  console.log("Worker: Message received from main script");
  const result = e.data[0] * e.data[1];
  let x = e.data[0];
  let y = e.data[1];
  drawCircle(x, y);
  if (isNaN(result)) {
    postMessage("Please write two numbers");
  } else {
    const workerResult = "Result: " + result;
    console.log("Worker: Posting message back to main script");
    postMessage(workerResult);
  }
};

function increase() {
  let ele = document.getElementById("box");
  let count = parseInt(ele.innerText);
  count++;
  ele.innerText = count;
}

function reset() {
  document.getElementById("box").innerText = 0;
}

function decrease() {
  let ele = document.getElementById("box");
  let count = ele.innerText;
  if (count > 0) count--;
  ele.innerText = count;
}

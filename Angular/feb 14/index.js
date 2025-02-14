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

let list = document.getElementById("list").innerHTML;
function increaseList() {
  let ul = document.getElementById("list");
  let newItem = document.createElement("li");
  ul.appendChild(newItem);
}

function decreaseList() {
  let ul = document.getElementById("list");
  if (ul.children.length > 0) ul.removeChild(ul.lastElementChild);
}

function resetList() {
  document.getElementById("list").innerHTML = "li";
}

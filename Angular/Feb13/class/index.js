function btn() {
  alert("hi");
}

function onMouse() {
  document.getElementById("box").style.backgroundColor = "lighgreen";
  document.getElementById("box").innerText = "mouse hover";
}

function mouseOut() {
  document.getElementById("box").style.backgroundColor = "grey";
  document.getElementById("box").innerText = "mosue out";
}

function clicked() {
  document.getElementById("box").style.backgroundColor = "red";
  document.getElementById("box").innerText = "clicked";
}

function aquaBox() {
  document.getElementById("box2").style.backgroundColor = "aqua";
  document.getElementById("box2").innerText = "aqua colour";
}

function redBox() {
  document.getElementById("box2").style.backgroundColor = "red";
  document.getElementById("box2").innerText = "red colour";
}

function blackBox() {
  document.getElementById("box2").style.backgroundColor = "black";
  document.getElementById("box2").innerText = "black colour";
}

function greenBox() {
  document.getElementById("box2").style.backgroundColor = "green";
  document.getElementById("box2").innerText = "green colour";
}

function changeBoxColor() {
  var selectedColor = document.getElementById("select").value;
  document.getElementById("box2").style.backgroundColor = selectedColor;
}

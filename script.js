const myBg = document.getElementById("btn-red");
myBg.onclick = makeRed;
function makeRed() {
  document.body.style.backgroundColor = "red";
}

function makeColor() {
  document.body.style.backgroundColor = "blue";
}

const bgYellow = document.getElementById("btn-yellow");
bgYellow.onclick = function makeYellow() {
  document.body.style.backgroundColor =  "yellow";
};

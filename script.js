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

const bgSet = document.getElementById("btn-pink");
bgSet.addEventListener("click", bgPink)
function bgPink(){
  document.body.style.backgroundColor = "pink"
}

const bgAqua = document.getElementById("btn-aqua");
bgAqua.addEventListener("click", function makeAqua(){
  document.body.style.backgroundColor = "aqua"
})

 document.getElementById("btn-tomato").addEventListener("click", function(){
  document.body.style.backgroundColor = "tomato"
 })
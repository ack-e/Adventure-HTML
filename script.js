function start(){
  document.getElementById("part1").classList.add("scale-in");
}

function stayup1(){
  document.getElementById("part2").classList.add("scale-in");
  document.getElementById("sleepbutton").classList.add("disabled");
  document.getElementById("part3").style.display = "none";
}

function sleep1(){
  document.getElementById("part3").classList.add("scale-in");
  document.getElementById("stayupbutton").classList.add("disabled");
  document.getElementById("part2").style.display = "none";
}

function stayup2(){
  document.getElementById("part4").classList.add("scale-in");
  document.getElementById("askparentbutton").classList.add("disabled");
  document.getElementById("part5").style.display = "none";
}

function stayup3(){
  document.getElementById("part5").classList.add("scale-in");
  document.getElementById("takebusbutton").classList.add("disabled");
  document.getElementById("part4").style.display = "none";
}

function sleep2(){
  document.getElementById("part6").classList.add("scale-in");
  document.getElementById("housebutton").classList.add("disabled");
  document.getElementById("part7").style.display = "none";
  document.getElementById("part4").style.display = "none";
  document.getElementById("part5").style.display = "none";
}

function sleep3(){
  document.getElementById("part7").classList.add("scale-in");
  document.getElementById("mallbutton").classList.add("disabled");
  document.getElementById("part6").style.display = "none";
  document.getElementById("part4").style.display = "none";
  document.getElementById("part5").style.display = "none";
}
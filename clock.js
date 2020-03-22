var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = days[d.getDay()];

var clock = document.getElementById("time");
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var theTime = h + ":" + m + ":" + s;
clock.innerHTML = theTime;

if(h >= 5 || h < 8){
  document.getElementById("message").innerHTML = "Breakfast and checking emails";
}

if(h >= 8 || h < 13){
  document.getElementById("message").innerHTML = "Code";
}

if(h >= 13 || h < 14){
  document.getElementById("message").innerHTML = "Lunchtime";
}

if(h >= 14 || h < 16){
  document.getElementById("message").innerHTML = "Socialize and enjoy";
}

if(h >= 16 || h < 18){
  document.getElementById("message").innerHTML = "Time for workout and refreshment";
}

if(h >= 18 || h < 22){
  document.getElementById("message").innerHTML = "Time for active rest";
}

if(h >= 22 || h < 5){
  msg.innerHTML = "You should be in bed";
}
var showTheTime = function(){

  var calen = document.getElementById("day");
  var clock = document.getElementById("time");
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var theTime = new Date();

  var d = days[theTime.getDay()];
  var h = theTime.getHours();
  var m = theTime.getMinutes();
  var s = theTime.getSeconds();

  if (m < 10){
    m = "0" + m;
  }
  
  if (s < 10){
    s = "0" + s;
  }

  var nowTime = h + ":" + m + ":" + s;

  calen.innerHTML = d;

  clock.innerHTML = nowTime;
};

var updateTheTime = function(){
  var scheduled = document.getElementById("message");
  var infoMessage;
  var h = new Date().getHours();

  if(h >= 5 && h < 8){
   infoMessage = "Breakfast and checking emails";
  }
  
  else if(h >= 8 && h < 13){
   infoMessage = "Code";
  }
  
  else if(h >= 13 && h < 14){
   infoMessage = "Lunchtime!";
  }
  
  else if(h >= 14 && h < 16){
   infoMessage = "Socialize and enjoy!";
  }
  
  else if(h >= 16 && h < 18){
   infoMessage = "Workout and refreshment";
  }
  
  else if(h >= 18 && h < 22){
   infoMessage = "Active rest";
  }
  
  else{
   infoMessage = "Bedtime!";
  }

  console.log(infoMessage);
  scheduled.innerHTML = infoMessage;

  showTheTime();
};

updateTheTime();

setInterval(updateTheTime, 1000);
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){
  var date = new Date();

  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  let hrPosition = (hr/12*360) + (min*(360/60)/12);
  let minPostion = (min/60*360) + (sec*(360/60)/60);
  let secPosition = sec/60*360;


  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPostion + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(runTheClock, 1000);

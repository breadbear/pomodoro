
var workMinutes = 25;
var restMinutes = 5;

$(document).ready(function(){









});

//Because setTimeout function takes milliseconds
function minutesToMilliseconds() {
  return minutes * 6000;
}

function workTimer() {
  setTimeout(function(){ alert("Time for a break!"); }, minutesToMilliseconds(workMinutes));
}

function breakTimer() {
  setTimeout(function { alert("Back to work!"); }, minutesToMilliseconds(breakMinutes));
}

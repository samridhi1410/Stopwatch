var hour = 0;
var minute = 0;
var second = 0;
var count = 0;
var alarm = [];
var timer = false;

function handleStart() {
  timer = true;
  stopwatch();
}
function handleStop() {
  timer = false;
}
function handleReset() {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}
function stopwatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      second = second + 1;
      count = 0;
    }
    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
      second = 0;
    }
    var hourS = hour;
    var minuteS = minute;
    var secondS = second;
    var countS = count;
    if (hourS < 10) {
      hourS = "0" + hourS;
    }
    if (minuteS < 10) {
      minuteS = "0" + minuteS;
    }
    if (secondS < 10) {
      secondS = "0" + secondS;
    }
    if (countS < 10) {
      countS = "0" + countS;
    }
    console.log(hourS, minuteS, secondS, alarm);

    if (alarm[0] === hourS && alarm[1] === minuteS && alarm[2] === secondS) {
      alert("time up");
      timer = false;
    }

    document.getElementById("hr").innerHTML = hourS;
    document.getElementById("min").innerHTML = minuteS;
    document.getElementById("sec").innerHTML = secondS;
    document.getElementById("count").innerHTML = countS;

    setTimeout("stopwatch()", 10);
  }
}

function handleAlarm() {
  let time = prompt("Enter the time (hh:mm:ss):");

  if (time == "") {
    alert("time can't be empty");
  } else if (time.length < 8 || time.length > 8) {
    alert("wrong format");
  } else {
    let arr = time.split(":");
    if (arr.length < 3 || arr.length > 3) {
      alert("wrong format");
    } else if (
      arr[0].length < 2 ||
      arr[0].length > 2 ||
      arr[1].length < 2 ||
      arr[1].length > 2 ||
      arr[2].length < 2 ||
      arr[2].length > 2
    ) {
      alert("wrong format");
    } else {
      alarm = arr;
    }
  }
}
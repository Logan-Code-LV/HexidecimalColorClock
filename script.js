$(document).ready(function() {
  function displayTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    var miridiem = "AM"
    // document.body.innerHTML = `${hours}:${minutes}:${seconds}`

    var clockDiv = document.getElementById("clock")

    if (seconds < 10) {
      seconds = "0" + seconds
    }

    if (minutes < 10) {
      minutes = "0" + minutes
    }

    if (hours > 12) {
      miridiem = "PM"
    }

    if (hours === 0) {
      hours = 12
    }

    clockDiv.textContent =
      hours + ":" + minutes + ":" + seconds + " " + miridiem

    var hexColorStr = "#" + hours + minutes + seconds

    document.body.style.backgroundColor = hexColorStr
  }

  displayTime()
  setInterval(displayTime, 1)
})

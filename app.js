function updateTime() {
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  madridDateElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("dddd Do MMMM YYYY");
  madridTimeElement.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("HH:mm:ss [<small>]A[</small>]");

  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("dddd Do MMMM YYYY");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("HH:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

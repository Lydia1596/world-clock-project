function updateTime() {
  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    madridDateElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("dddd Do MMMM YYYY");
    madridTimeElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    torontoDateElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("dddd Do MMMM YYYY");
    torontoTimeElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("dddd Do MMMM YYYY");
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  document.getElementById(
    "background-image"
  ).style.backgroundImage = `url('${cityName}.jpg')`;
  citiesElement.innerHTML = `<div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("HH:mm:ss [<small>]A[</small>]")}</div>
</div>
<a href="/" id="homepage_link">Back to homepage</a>
`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

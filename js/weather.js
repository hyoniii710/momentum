const API_KEY = "5c96f0152a68d61da7bdd8accf047ed4";

function onOk(position) {
  //위도
  const lat = position.coords.latitude;
  //경도
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  //
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const iconSelect = document.querySelector(".weather .weather__icon");
      const icon = data.weather[0].main;
      const weather = document.querySelector(".weather span:nth-child(2)");
      const city = document.querySelector(".weather span:nth-child(3)");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
      iconSelect.setAttribute("src", `./img/icons/${icon}.png`);
    });
  // fetch -> response -> json ()
}
function onError() {
  alert("날씨 에러 ! ");
}

navigator.geolocation.getCurrentPosition(onOk, onError);
//getCurrentPosition(실행함수, 에러가 발생했을때 실행할 함수)

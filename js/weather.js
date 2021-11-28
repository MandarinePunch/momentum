const API_KEY = "cde4e09cf37fb0c95dc3e337bc51c461";
const weather = document.querySelector("#weather");

const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        city.innerText = data.name;
    });
}

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordsObj = {
        lat,
        lon
    };

    getWeather(lat, lon);
    saveCoords(coordsObj);
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
      askForCoords();
    }
    else{
      const parsedCoords = JSON.parse(loadedCoords);
      getWeather(parsedCoords.lat, parsedCoords.lon);
    }
  }
  
  
  function init(){
    loadCoords();
  }
  init();
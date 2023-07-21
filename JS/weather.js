const API_KEY = "1f850af321e7987e82fec3c6682b334a";

function onGeoOk(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("Error!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
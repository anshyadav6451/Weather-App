require('weather.env').config();

async function getweather() {
    const city = document.getElementById("city").value.trim();
    if(city === " "){
        alert("Please enter correct city name");
        return;
    }
        const url = `http://api.weatherapi.com/v1/current.json?key=687ea6a090e842819c9164114260109&q=${encodeURIComponent(city)}&aqi=no`;
        
        const response = await fetch(url);
        
        const data = await response.json();
        
        console.log(data);
        
        document.getElementById("temperature").textContent = Math.round(data.current.temp_c) + "℃";
        
        document.getElementById("condition").textContent = data.current.condition.text;
        
        document.getElementById("humidity").textContent = data.current.humidity;
        
        document.getElementById("wind").textContent = data.current.wind_kph;
}

getweather();

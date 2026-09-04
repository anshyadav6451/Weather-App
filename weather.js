const apiKey = "687ea6a090e842819c9164114260109";

//const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=&{apiKey}&units=metric';
async function getweather() {
    const city = document.getElementById("city").value.trim();
    if(city === ""){
        ("Please enter correct city name");
        return;
    }
        const url = `http://api.weatherapi.com/v1/current.json?key=687ea6a090e842819c9164114260109&q=${encodeURIComponent(city)}&aqi=no`;
        //console.log("city:",city);
       // console.log("url", url)
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        document.getElementById("temperature").textContent = Math.round(data.current.temp_c) + "℃";
        document.getElementById("condition").textContent = data.current.condition.text;
        document.getElementById("humidity").textContent = data.current.humidity;
        document.getElementById("wind").textContent = data.current.wind_kph;
}
getweather();

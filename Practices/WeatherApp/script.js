let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const weatherStatus = document.getElementById("weatherStatus");
const logoImage = document.getElementById("logoImage");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter the City Name:");
        return;
    }
    const city = inputBox.value;

    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=a9e64978919c4f66ad3120602230808&q=${city}`);

    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    countryName.innerText = data.location.country;
    stateName.innerText = data.location.region;
    cityName.innerText = data.location.name;
    humidity.innerText = data.current.humidity;
    windSpeed.innerText = data.current.wind_kph;
    temprature.innerText = data.current.temp_c;
    weatherStatus.innerText = data.current.condition.text;
    logoImage.src = data.current.condition.icon;

};
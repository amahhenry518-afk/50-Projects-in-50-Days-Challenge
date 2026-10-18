
const API_KEY = '9d862a1429d95f772a9c192ef5643dde'; 

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherBox = document.getElementById('weather-box');
const errorBox = document.getElementById('error-box');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const url = `https://openweathermap.org{city}&units=metric&appid=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            showError('City not found. Please try again.');
            return;
        }

        if (!response.ok) {
            showError('An error occurred. Please check your API key.');
            return;
        }

        
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = Math.round(data.main.temp);
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${data.wind.speed} m/s`;

        
        errorBox.style.display = 'none';
        weatherBox.style.display = 'block';

    } catch (error) {
        showError('Unable to connect to the weather service.');
    }
}

function showError(message) {
    const errorMsgElement = document.getElementById('error-message');
    errorMsgElement.textContent = message;
    weatherBox.style.display = 'none';
    errorBox.style.display = 'block';
}


searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        checkWeather(city);
    }
});

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            checkWeather(city);
        }
    }
});

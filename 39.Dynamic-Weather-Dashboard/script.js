document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const searchButton = document.getElementById('searchButton');
    const weatherReport = document.getElementById('weatherReport');
    const weatherIconImg = document.getElementById('weatherIcon');
    const locationName = document.getElementById('locationName');
    const degree = document.getElementById('degree');
    const fahrenheit = document.getElementById('fahrenheit');
    const lastUpdatedDate = document.getElementById('lastUpdatedDate');
    const lastUpdatedTime = document.getElementById('lastUpdatedTime');
    const currentClimate = document.getElementById('currentClimate');
    const countryName = document.getElementById('countryName');
    const humidityValue = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const randomBackground = document.getElementById('background');

    searchButton.addEventListener('click', () => {
        const userInputValue = userInput.value.trim();
        if (userInputValue) {
            fetchWeatherData(userInputValue);
        } else {
            alert('Please enter a location.');
        }
    });

    function fetchWeatherData(location) {
        const url = `https://api.weatherapi.com/v1/current.json?key=47acff46987540ea933174127241605&q=${location}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateUI(data);
                changeBackgroundImage(location);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Failed to fetch weather data. Please try again.');
            });
    }

    function updateUI(data) {
        const { location, current } = data;
        const { name, country } = location;
        const { condition, temp_c, temp_f, humidity, wind_kph, last_updated } = current;
        const { text, icon } = condition;

        weatherIconImg.src = icon;
        currentClimate.textContent = text;
        locationName.textContent = name;
        degree.textContent = `${temp_c}°C`;
        fahrenheit.textContent = `${temp_f}°F`;
        lastUpdatedTime.textContent = last_updated.slice(11);
        lastUpdatedDate.textContent = last_updated.slice(0, 10);
        countryName.textContent = country;
        humidityValue.textContent = `RH: ${humidity}%`;
        windSpeed.textContent = `WS: ${wind_kph} km/h`;

        weatherReport.classList.add('show');
    }

    function changeBackgroundImage(query) {
        const imageUrl = `https://source.unsplash.com/random?${query}`;
        randomBackground.style.backgroundImage = `url(${imageUrl})`;
    }
});

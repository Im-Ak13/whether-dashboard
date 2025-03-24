document.getElementById('get-weather-btn').addEventListener('click', getWeather);

async function getWeather() {
  const city = document.getElementById('city-input').value;
  const apiKey = 'your-api-key'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found!');
    } else {
      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }
  } catch (error) {
    console.error(error);
    alert('Failed to fetch weather data.');
  }
}

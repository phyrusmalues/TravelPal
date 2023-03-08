function temperature() {
    const city = document.getElementById("city").value;
    
    if (city === "") {
      alert("Please select a city.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //fetch data from weatherAPi
        var icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        var weather = document.getElementById("weather");
        var temperature = Math.round(data.main.temp - 273.15);
        var description = data.weather[0].description;
        var time = data.timezone;

        //display in html
        weather.innerHTML = `
        <h1><img src="${icon}" alt="${description}"></h1>
        <h1>City: ${city}</h1>
        <h1>Current Temperature: ${temperature} &deg;C</h1>
        <h1>Weather: ${description}</h1>
        <h1>Timezone in city: ${time}</h1>
        `;
      })
      .catch(error => {
        console.log(error);
        const weather = document.getElementById("weather");
        weather.innerHTML = `<p>Could not retrieve weather data for ${city}</p>`;
    });
  }

const apikey = '5d10c16daf7c2c32365afa3ef691bac9'
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='

var searchBox = document.querySelector('.search input')
var searcbBtn = document.querySelector('.search button')
var weatherIcon = document.querySelector('.weather-icon')
var errroText = document.querySelector('.error-text')


async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    console.log(response);

    if(response.status == 404){

       document.querySelector('.error-text').style.display = 'block';
       document.querySelector('.weather').style.display = 'none'
        
    }else{
        var data = await response.json();
        console.log(data);
        
        var name = document.querySelector('.city').innerHTML = data.name;
        var temp = document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        var huminity = document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        var speed = document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    
        if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'img/cloud.png'
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'img/clear.png'
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'img/rainy.png'
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'img/Mist.png'
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'img/drizzle.png'
        }
    
    
        var displayBlock = document.querySelector('.weather').style.display = 'block'
        var error = document.querySelector('.error-text').style.display = 'none'
    
    }
      
    
}



searcbBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)

})











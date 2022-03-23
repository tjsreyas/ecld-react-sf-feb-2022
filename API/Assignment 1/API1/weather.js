var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var image = document.querySelector('.icon')
var desc = document.querySelector('.description')
var humidity = document.querySelector('.humidity')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=73aec683123a26f3ca13af6babff83a1')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var icons = data['weather'][0]['icon']
        var descValue = data['weather'][0]['description']
        var humidityValue = data['main']['humidity']
    
        document.querySelector(".name").innerText = "Weather in "+ nameValue;
        temp.innerHTML = tempValue + "°C";
        image.src = "https://openweathermap.org/img/wn/"+ icons + ".png"
        desc.innerHTML = descValue;
        humidity.innerHTML = "Humidity : "+humidityValue
    })
})
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var age = document.querySelector('.gender')

button.addEventListener('click', function(){
    fetch('https://api.genderize.io?name='+inputValue.value)
    .then(response => response.json())
    .then(data => {
		var input = data['name']
        var nameValue = data['gender'];
        age.innerHTML = "Gender of " + input + " is " + nameValue;
    })
})
function sizeDecrease(){
    var image = document.getElementById('img')
    image.style.width = (image.width - 5) + "px"
    document.getElementById('b').innerHTML = image.style.width
}
function sizeIncrease(){
    var image = document.getElementById('img')
    image.style.width = (image.width + 5) + "px"
    document.getElementById('b').innerHTML = image.style.width
}
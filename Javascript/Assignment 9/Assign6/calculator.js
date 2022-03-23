function calculate(){
    var bill = document.getElementById("bill").value;
    var percent = document.getElementById("percent").value;
    
    var result = document.getElementById("tip").value = (bill * percent)/100
    console.log(result)
    document.getElementById("tip").innerHTML = result
    var result1 = document.getElementById("total").value = (result + bill)

    document.getElementById("total").innerHTML = result1
    document.getElementById('msg').innerHTML = `Total Bill = ${result1}`

    if(bill === '' || percent == ''){
        document.getElementById('msg').innerHTML = 'Please enter a valid input'
    }
}
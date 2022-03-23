//Question1
function addNumbers(num1, num2){
    var sum = num1 + num2
    return sum
}
console.log(addNumbers(10,5))

//Question2
function absoluteDifference(num1, num2){
    //var diff = num1-num2
    return Math.abs(num1-num2)
}
console.log(absoluteDifference(12,4))
console.log(absoluteDifference(4,18))

//Question3
function isOdd(num){
    if(num % 2 !== 0){
        return true
    }
    return false
}
console.log(isOdd(125));

//Question4
function oddNumbers(n){
    for(var i=0;i<n;i++){
        if(i%2 !== 0){
            console.log(i)
        }
    }
}
oddNumbers(10)

//Question5
var arr = [20, 10, 50, 16]
var sum = 0 , average
function averageNum(){
    for(var i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
        average = sum/arr.length
        return average
}
averageNum()
console.log("Average "+average)


//Question6
function toLower(str){
 var string = str.toLowerCase()
 console.log(string)
}
toLower('SREYA')

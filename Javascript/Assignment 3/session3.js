//Question 1
//Define a variable count Print your name using while loop the no of times the value assigned to the variable count

var i = 0;
while(i<=3){
    console.log("Sreyas");
    i++;
}

//Question 2
//Define a variable limit Print your name using for loop the no of times the value assigned to the variable limit

var x;
for(x=0;x<=5;x++){
    console.log("Sreyas T J");
}

//Question 3
//Using a while loop print the numbers in descending order from the given starting to ending limit. Start - 20 End - 25
var start = 20;
var end = 25;
while(start<=end){
    console.log(end)
    end--;
}

//Question 4
//Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4
var num;
for(num=13;num>=1;num){
    console.log(num);
    num=num-4;
}

//Question 5
//Print the average of all the numbers from 1 to given limit
var limit = 7;
var i;
var sum = 0;
for(i=1;i<=limit;i++){
    sum = sum+i;
}
var average = sum/limit;
console.log("Average = "+average);

//Question 6
//Find out the average of the first 100 n natural numbers using for loop.
var j;
var sum = 0;
for(j=0;j<=100;j++){ 
    sum = sum+j;
}
var average = sum/100;
console.log(average);

//Question 7
//Print all the multiples of 3 till 100 using for loop
for(var i=0;i<100;i++){
    if(i%3 == 0){
        console.log(i);
    }
}

//Question 8
//Given a string print all the consonants which are not a,e,i,o,u using for loop.
var str = "edstemtechnologies";
var i;
for(i=0;i<str.length;i++){
    if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' &&
       str[i] !== 'o' && str[i] !== 'u'){
           console.log(str[i]);
       }
}

//Question 9
//Given a string print all the consonants which are not a,e,i,o,u using for loop.
var str = "Reactjs";
console.log("Length of the String = "+str.length);

//Question 10
//Given a string, print the first character and last character of that string.
var str = "Javascript";
    console.log(str[0]);
    console.log(str[str.length-1]);

//Question 11
//Given a string print the odd indexes of that string using for loop
var str = "Javascript";
for(var i=0;i<str.length;i++){
    if(i%2 !== 0){
        console.log(str[i]);
    }
}

//Question 12
//Find out the sum of the first 10 natural numbers using for loop
var sum = 0;
for(var i=0;i<=10;i++){
    sum = sum+i;
}
console.log(sum);




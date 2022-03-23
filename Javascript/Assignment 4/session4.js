//Question1.js
var count = 0;
var str = ['edstem', 'react', 'javascript', 'html', 'css'];
for(var i=0;i<str.length;i++){
    for(var j=0;j<str[i].length;j++){
        if(str[i][j]==='a' || str[i][j]=='e' || str[i][j]=='i' || 
           str[i][j]=='o' || str[i][j]=='u'){
            count++;
        }
    }
}
console.log(count);

//Question2.js
var str = 'malayalam';
var reverse = '';
for(var i=str.length-1;i>=0;i--){
    reverse = reverse + str[i];
}
    if(reverse === str){
        console.log("YES");
    }
    else{
        console.log("NO");
    }

//Question3
var marks = [95, 86, 66, 94, 58];
var sum = 0;
for(var i=0;i<marks.length;i++){
    sum = sum+marks[i];
}
var average = sum/marks.length;
console.log(average);

//Question4
var str = ['edstem', 'react', 'html', 'foodie', 'coder'];
var arr = [];
for(var i=0;i<str.length;i++){
    if(str[i].length % 2 ==0){
        arr.push(str[i]);
    }  
}
console.log(arr);

//Question5
var num =  [5, 9, 8, 12, 22, 18];
for(var i=0;i<num.length;i++){
    if(num[i]%3==0){
        num[i] = 'multiple';
    }
}
console.log(num);

//Question6
var arr = [];
for(var i=1;i<=10;i++){
    arr.push(i);
    }
console.log(arr);

//Question7
var arr = [];
var word = '';
var str = "Edstem Technologies located at kerala";
for(var i=0;i<str.length;i++){
    if(str[i]==' '){
        arr.push(word);
        word = '';
    }
    else{
        word = word+str[i];
    }
}
arr.push(word);
console.log(arr);

//Question8
var str = 'Edstem';
for(var i=0;i<str.length;i++){
    if(i%2 !== 0){
        console.log(str[i]);
    }
}

//Question9
var arr = [];
var word = '';
var str = "Coding is Easy";
for(var i=0;i<str.length;i++){
    if(str[i]==' '){
        arr.push(word);
        word = '';
    }
    else{
        word = word+str[i];
    }
}
arr.push(word);
console.log(arr.length);

//Question10
var arr = ['react', 'html', 'edstm'];
var str = 'edstem';
var flag;
for(var i=0;i<arr.length;i++){
    if(arr[i] === 'edstem'){
        flag=0;
    }
}
if(flag==0){
    console.log("True");
}
else{
    console.log("False");
}



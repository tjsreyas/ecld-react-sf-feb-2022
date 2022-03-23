//Question1
var str = ["HTML", "CSS", "JAVA", "JS"]
var str1 = ""
for(var i=0;i<str.length-1;i++){
    str1 += str[i]+","
}
str1 = str1 + str[3]
console.log(str1);

//Question2
var str = ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
var count = 0
for(var i=0;i<str.length;i++){
    for(var j=0;j<str[i].length;j++)
    if(str[i][j] != ''){
        count++;
    }
}
console.log("Total number of characters = "+count);

//Question3
var score = [100, 20, 31, 150, 39, 72]
var max = score[0]
var min = score[0]
for(var i=0;i<score.length;i++){
    
        if(score[i]>max){
            max=score[i];
        }
        else if(score[i]<min){
            min=score[i];
        }    
}
console.log("Highest Score = "+max);
console.log("Lowest Score = "+min);

//Question4
var matrix = [[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]]
var rows = matrix.length;
var columns = matrix[0].length;
console.log(rows +","+columns);   

//Question5
var matrix = [[1, 2, 3], 
              [4, 5, 6],
              [7, 8, 9]]
for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
        if(i==j){
            console.log(matrix[i][j]);
        }
    }
}

//Question6
var arr = ["assignment", "problem", "media", "upload"]
for(var i=0;i<arr.length;i++){
    if(arr[i][0] == 'a' || arr[i][arr[i].length-1] == 'a'){
        console.log(arr[i])
    }
}

//Question7
var arr = ["edstem", "tech"]
var str1 = ""
for(var i=0;i<arr.length-1;i++){
    str1 += arr[i]+"_"
}
str1 = str1 + arr[1]
console.log(str1);


//Question8
var matrix = [[1, 2, 3],
              [4, 5, 6],
              [7,  8, 9]]
var sum1 = 0
var sum2 = 0
var difference
for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
        if(i==j){
            sum1 = sum1 + matrix[i][j]
        }
        if(i+j == 2){
            sum2 = sum2 + matrix[i][j]
        }
    }
}
difference = sum1 - sum2
console.log("First Diagonal -> 1+5+9 -> "+sum1)
console.log("Second Diagonal -> 3+5+7 -> "+sum2)
console.log("Difference => "+difference);


//Question9
var num = [2,3,4]
var product = 1
for(var i=0;i<num.length;i++){
    product = product * num[i]
}
console.log("Product of numbers = "+product);

//Question10
var matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]
for(var i=0;i<matrix.length;i++){
    for(j=0;j<matrix[i].length;j++){
        if(j==1){
            console.log(matrix[i][j])
        }
    }
}

//Assign 1
var name = "Sreyas T J";
var age = 25;
var maritalStatus = "Single";
console.log("Name : "+name);
console.log("Age : "+age);
console.log("Marital Status : "+maritalStatus);

//Assign 2
var gender = "Female";
var height = 62;
var dish = "Non-veg";
console.log(typeof(gender));
console.log(typeof(height));
console.log(typeof(dish));

//Assign 3
var yearOfBirth = 1996;
var currentYear = 2022;
var currentAge = currentYear-yearOfBirth;
console.log("currentAge = "+currentAge);

//Assign 4
var sub1 = 45;
var sub2 = 42;
var sub3 = 35;
var totalMarks = sub1+sub2+sub3;
console.log("Total Marks = " +totalMarks);

//Assign 5
var length = 10;
var breadth = 5;
var perimeter = 2*(length+breadth);
var area  = length * breadth;
console.log("Perimeter = "+perimeter);
console.log("Area = "+area);

//Assign 6
var totalMonths = 45;
var remainingMonths = totalMonths%12;
console.log("Remaining Months = "+remainingMonths);

//Assign 7
var principalAmount = 500;
var interestPercentage = 20;
var time = 10;
var SI = (principalAmount*interestPercentage*time)/100;
console.log("Simple Interest = "+SI);

//Assign 8
var stud1 = 85;
var stud2 = 78;
var stud3 = 63;
var stud4 = 90;
var stud5 = 72;
var stud6 = 88;
var averagemarks = (stud1+stud2+stud3+stud4+stud5+stud6)/6;
console.log("Average Marks = "+averagemarks);

//Assign 9
var pdtPrice1 = 20;
var pdtPrice2 = 25;
var pdtPrice3 = 15;
var pdtQty1 = 2;
var pdtQty2 = 4;
var pdtQty3 = 2;
var totalAmount = pdtPrice1*pdtQty1+pdtPrice2*pdtQty2+pdtPrice3*pdtQty3;
console.log("Total Amount = "+totalAmount);

//Assign 10
var pdtPrice1 = 60;
var pdtPrice2 = 80;
var pdtPrice3 = 15;
var pdtQty1 = 2;
var pdtQty2 = 4;
var pdtQty3 = 8;
var tax = 10;
var discount = 20;
var tip = 5;
var totalAmount = pdtPrice1*pdtQty1 +
                  pdtPrice2*pdtQty2 +
                  pdtPrice3*pdtQty3;
var totalBillAmount = totalAmount *
                      [(100+tax)/100] *
                      [(100-discount)/100] *
                      [(100+tip)/100];

console.log("Total Bill Amount = "+totalBillAmount);







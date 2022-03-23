//question1
//If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"
var year = 2500;
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("LEAP YEAR");
        }else{
            console.log("NOT A LEAP YEAR");
        }
    }else{
        console.log("LEAP YEAR");
    }
}else{
    console.log("NOT A LEAP YEAR");
}

//question2
//In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"
var age = 25;
if(age >= 18){
    console.log("YES");
}
else{
    console.log("NO");
}

//question3
//Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"
var character = "i";
if(character == 'A' || character == 'E' || character == 'I' || 
   character == 'O' || character == 'U' || character == 'a' ||
   character == 'e' || character == 'i' || character == 'o' ||
   character == 'u'){
    console.log("V");
    }
    else{
        console.log("C");
    }

//question4
//Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)
var pincode = "6861445";
if(pincode.length==6){
    console.log("VALID");
}
else{
    console.log("INVALID");
}

//question5
//Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"
var state = "Goa";
if(state == 'Jammu & Kashmir'|| state == 'Himachal Pradesh' || 
   state == 'Punjab' || state == 'Uttarakhand' || state == 'Haryana' || 
   state == 'Delhi' || state == 'Rajasthan' || state == 'Uttar Pradesh'){
       console.log("State is in NORTH");
   }
else if(state == 'Bihar' || state == 'Jharkhand' || state == 'Odisha' || 
        state == 'West Bengal'){
            console.log("State is in EAST");
        }
else if(state == 'Andhra Pradesh' || state == 'Karnataka' || 
        state == 'Kerala' || state == 'Tamil Nadu' || state == 'Telangana'){
        console.log("State is in SOUTH");
        }
else{
    console.log("State is in WEST");
    }

//question6
//Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)
var number = 2469;
console.log(number % 2 == 0 ? "EVEN" : "ODD");

//question7
//Given two numbers a, b Print the below statements based on the condition
var A = 20;
var B = 20;
console.log(A>B ? "A>B" : A<B ? "A<B" : "A=B");

//question8
//Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)
var size = "L";
if(size == 'S' || size == 's'){
    console.log("Small");
}
else if(size == 'M' || size == 'm'){
    console.log("Medium");
}
else if(size == 'L' || size == 'l'){
    console.log("Large");
}
else if(size == 'XL' || size == 'xl'){
    console.log("Extra Large");
}
else{
    console.log("None");
}

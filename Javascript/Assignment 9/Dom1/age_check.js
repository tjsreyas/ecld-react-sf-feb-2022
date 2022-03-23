function printMsg() {
   var input = document.getElementById("input").value;
   if(input > 18){
       console.log("You can drive in India!")
       document.getElementById("heading").innerHTML = "You can drive in India!"
   }
   else if(input < 18){
       console.log("You can't drive in India");
       document.getElementById("heading").innerHTML = "You can't drive in India!"
   }
   else{
    console.log("You are just old enough to drive in India!");
    document.getElementById("heading").innerHTML = "You are just old enough to drive in India!"
   }
  }
function buttonChange(){
   var result = document.getElementById("bc").value
   document.getElementById("btn1").style.backgroundColor = result

   var result = document.getElementById("fc").value
   document.getElementById("btn1").style.color = result

   var result = document.getElementById("fs").value
   document.getElementById("btn1").style.fontSize = result + 'px'

   var result = document.getElementById("fw").value
   document.getElementById("btn1").style.fontWeight = result 

   var result = document.getElementById("pad").value
   document.getElementById("btn1").style.padding = result + 'px'

   var result = document.getElementById("br").value
   document.getElementById("btn1").style.borderRadius = result + 'px'

      document.getElementById('btn1').style.visibility = 'visible'
}
var timer_sec = 1;

var text_value = document.getElementById("land_percentage");
text_value.innerHTML = "少於10%土地已被開發";

function timer() {
    timer_sec = timer_sec + 1

    if (timer_sec % 2 == 0 ){

        text_value.innerHTML = "Developed Land <10%";
    }
    
    else {
    
        text_value.innerHTML = "少於10%土地已被開發";  
    }
      

  }
  var myVar = setInterval(timer, 5000); 

//   
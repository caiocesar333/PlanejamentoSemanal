function relogio(){

    var data=new Date();
    var hor=data.getHours();
    var min=data.getMinutes();
    
    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }

    
    
    var horas=hor + ":" + min;
    
    let h1 = document.createElement("h1");
    h1.innerText = horas;
    let currentTime = document.getElementById("current-time");
    currentTime.appendChild(h1);

}

// var timer = setInterval(relogio,1000); 
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
    

    return horas;

}

function main(){
    const timer = document.getElementById("current-time");
    setInterval (() => timer.innerText = relogio() , 1000);
}

main ();
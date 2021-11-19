

$(function (){

let display = $("#display").get(0);

let hour = 0;
let min = 0;
let sec = 0;

let hour_number = 0;
let min_number = 0;
let sec_number = 0;

function countUp(){
    sec++;
     if (sec > 59){
        sec=0;
        min++;
    }

    if (min > 59){
        min= 0;
        hour++;
    }

    if (hour > 99){
        hour=0;
        min=0;
        sec=0;
    }
   
    if(sec < 10){
        sec_number = "0" + sec;
    }else{
        sec_number = sec;
    }
    

    if(min < 10){
        min_number = "0" + min;
    }else{
        min_number = min;
    }
    

    if(hour < 10){
        hour_number = "0" + hour;
    }else{
        hour_number = hour;
    }
    
    display.innerHTML = hour_number + ":" + min_number + ":" + sec_number;
}


$ ("#start").click(function(){
   　count = setInterval(countUp,1000);
           
  　 $(this).prop("disabled",true);
     $("#reset,#stop").prop("disabled",false);
});
    

$("#stop").click(function(){
    clearInterval(count);
       
    $(this).prop("disabled",true);
    $("#reset,#start").prop("disabled",false);
 });



$("#reset").click(function(){
     clearInterval(count);

     hour = 0;
     min = 0;
     sec= 0;

     display.innerHTML = "00:00:00";

    $("#reset, #stop").prop("disabled",true);
    $("#start").prop("disabled",false);
});

});

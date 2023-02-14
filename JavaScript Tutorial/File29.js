// SetTimeOut & setInterval & ClearInterval in JavaScript

// setTimeOut ::
// If we have to show something after delay of time second then we
// use setTimeOut
 
// setTimeout(function(){
//     console.log("setTimeout is running");
// },4000)



// setInterval ::
// It show something after certain time in repeatedly
 
let getTime = setInterval(curTime,1000 );

function curTime(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("heads").innerHTML=time;
    console.log(time);
}
 
 
// clearInterval ::
// we clear the time of function or stop
 
function stop(){
    clearInterval(getTime)
}
stop()
 







 
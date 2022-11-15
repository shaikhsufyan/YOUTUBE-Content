 function Clock(){
    let Time=new Date();
    let CurTime=Time.toLocaleTimeString();
    document.getElementById('clkId').innerHTML=CurTime;
 }

 let ChangeTime=setInterval(Clock,1000)
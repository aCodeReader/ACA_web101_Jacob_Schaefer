var myHour=document.getElementById('hour'),
    myMinutes=document.getElementById('minutes'),
    mySecond=document.getElementById('second')
    ;

function myClock(){
  
  var now = new Date() ; 
  var hour = now.getHours();
  var minutes = now.getMinutes();
  var second = now.getSeconds();
  
  if(second<10) {second='0'+second}
  if(minutes<10){minutes='0'+minutes}
  if(hour<10)   {hour='0'+hour}
  
  myHour.innerText=hour + ':' ; 
  myMinutes.innerText=minutes +':';
  mySecond.innerText=second ;
}
setInterval(myClock , 500);


function getInputValue(){
    // Selecting the input element and get its value 
    const inputVal = document.getElementById("input").value;
    console.log(inputVal);
    //updateTimer((inputVal));
 
    setInterval(function(){ updateTimer(inputVal); }, 1000);
    
    //sconsole.log(new Date(inputVal));
    //console.log(Date.parse(new Date(inputVal)));
    
}   





function updateTimer(value) {

    //future = Date.parse(value);
    future = new Date(value.replace(/-/g, '\/'));
    console.log("future: ",future);
    //f = Date.parse(future);
    //future = Date.parse("oct 22, 2021 00:00:00");
    now = new Date();
    console.log("now ",now);
    diff = future - now;
    console.log("diff ", diff);

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days < 10 ? "0" + days : days;   
    h = (hours - days * 24) < 10 ? "0"+(hours - days * 24):(hours - days * 24);
    m = (mins - hours * 60)<10 ? "0"+(mins - hours * 60):(mins - hours * 60);
    s = (secs - mins * 60)<10 ? "0"+(secs - mins * 60):(secs - mins * 60);

    //console.log(d);
    document.getElementById("timer")
    .innerHTML =

    '<li>' + d + '</li>' + 
    
    '<li>' + h + '</li>' +
   
    '<li>' + m + '</li>' +
    
    '<li>' + s + '</li>';
    

    document.getElementById("details").innerHTML = 

    '<div>'+'<span>Days</span></div>'+
    '<div>'+'<span>Hours</span></div>'+
    '<div>'+'<span>Minutes</span></div>'+
    '<div>'+'<span>Seconds</span></div>';
  
    document.getElementById("input").style.display='none';
    document.getElementById("btn").style.display='none';

   
}
//setInterval('updateTimer()', 1000);
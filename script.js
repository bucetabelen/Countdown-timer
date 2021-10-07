function updateTimer() {
    future = Date.parse("jan 01, 2022 00:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days < 10 ? "0" + days : days;   
    h = (hours - days * 24) < 10 ? "0"+(hours - days * 24):(hours - days * 24);
    m = (mins - hours * 60)<10 ? "0"+(mins - hours * 60):(mins - hours * 60);
    s = (secs - mins * 60)<10 ? "0"+(secs - mins * 60):(secs - mins * 60);

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
   
   
}
setInterval('updateTimer()', 1000);
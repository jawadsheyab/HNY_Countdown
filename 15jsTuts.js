/*global console*/

/*

    Lesson Name             :   Create Countdown Timer
    Difficulty              :   Very Easy
    What We Will Use        :   setInterval(), clearInterval(), Math.floor(), innerHTML
    Auther                  :   Elzero Web School

*/


var seconds = 10, // Number Of Seconds
    
    countDiv = document.getElementById('countdown'),
    
    secondPass,
    
    countDown = setInterval(function () {
        
        'use strict';
        
        secondPass();
        
    }, 1000);


function secondPass() {
    
    'use strict';
    
    var minutes = Math.floor(seconds / 60),
    
        remSeconds = seconds % 60;
    
    if (seconds < 10) {
        
        remSeconds = '0' + remSeconds;
        
    }
    
    if (minutes < 10) {
        
        minutes = '0' + minutes;
    }
    
    countDiv.innerHTML = minutes + ':' + remSeconds;
    
    if (seconds >= 0) {
        
        seconds = seconds - 1; // Decrease Ons Second Every 1000 Millisecond
        
    } else {
        
        clearInterval('countDown'); // Stop CountDown Timer
        
        countDiv.innerHTML = 'Happy New Year !';
        
    }
    
}


                           


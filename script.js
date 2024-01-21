document.addEventListener('DOMContentLoaded', function(){
    copecartUpsell.run();
    }, false);

    function getCurrentDay() {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var today = new Date();
        var dayNumber = today.getDay();
        var dayName = days[dayNumber];
         
        document.getElementById('currentDay').textContent = dayName;
       }
       
       getCurrentDay();
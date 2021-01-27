$(document).ready(function(){
    function updateTime() {
        let currentTime = $("#currentDay");
        let now = new Date();
        currentTime.text(now.toLocaleTimeString());
        let currentHour = now.getHours();
        console.log(currentHour);
        
    } 
    function formatTimeBlock() {
        let timeBlock = $("#time-block-9");
        timeBlock.addClass("past")
    }


    updateTime();
    setInterval(updateTime, 1000);
});
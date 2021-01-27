$(document).ready(function(){
    function updateTime() {
        let currentTime = $("#currentDay");
        let now = new Date();
        currentTime.text(now.toLocaleTimeString());
        let currentHour = now.getHours();
        console.log(currentHour);
        
    }; 
    function formatCalendar() {
        for (let i = 9; i <= 17; i++) {
            formatTimeBlock(i);
        }
        
    };
    function formatTimeBlock(hour) {
        let timeBlock = $(`#time-block-${hour}`);
        let currentHour = new Date().getHours();
        currentHour = 13;
        if (hour < currentHour) {
            timeBlock.addClass("past");
        } else if (hour < currentHour + 1) {
            timeBlock.addClass("present");
        } else {
            timeBlock.addClass("future");
        }

        timeBlock.addClass("past")

    };

    function handleSaveEvent(event) {
        console.log(event);
    };

    function initializeSaveButtons() {
        // for (let i = )
        $("#time-block-9 button").click(handleSaveEvent);
        
    };

    formatCalendar();
    updateTime();
    setInterval(updateTime, 1000);
    initializeSaveButtons();
});
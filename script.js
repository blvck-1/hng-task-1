document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfTheWeek() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        return days[currentDate.getUTCDay()];
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        return Date.now();
    }

    // Update the data attributes with real-time data
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = getCurrentDayOfTheWeek();
    document.querySelector("[data-testid='currentUTCTime']").textContent = getCurrentUTCTime();
});

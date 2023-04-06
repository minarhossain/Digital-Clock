console.log("Connected");

function displayTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = date.toLocaleDateString(undefined, options);
    document.getElementById("clock").innerHTML = time + "<br>" + dateStr;
}
setInterval(displayTime, 1000);
// displayTime()
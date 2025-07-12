var txt = document.getElementById("current_time");
var btn = document.getElementById("btn");

function changeTime() {
    const currentTime = new Date();
    txt.innerText = currentTime;
}

btn.addEventListener("click", changeTime);
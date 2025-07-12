function displayTime() {
    document.getElementById('current_time').innerHTML = new Date();
}

const btn = document.getElementById('btn');
btn.onclick = displayTime;

// onclick="getElementById('current_time').innerHTML = Date()"
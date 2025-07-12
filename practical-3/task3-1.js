// task3-1
var bluebox = document.getElementById("mcount");
var count = 0;

bluebox.addEventListener("mouseenter", increase);
function increase() {
    count = count + 1;
    bluebox.innerText = count;
}

// task3-2
var posts = document.getElementById("posts");
var post_btn = document.getElementById("post_btn");
var dateText = document.getElementById("current_time");
// read in userInput
var inputText = document.getElementById("userInput").value;

// post
function post() {
    const currentTime = new Date();
    dateText.innerText = currentTime;

    var post = document.createElement('div');
    post.id = 'post';
    
    const dateContentDiv = document.createElement('div');
    dateContentDiv.className = 'dateContent';
    dateContentDiv.textContent = currentTime.toLocaleString();
    
    const inputContentDiv = document.createElement('div');
    inputContentDiv.className = 'inputContent';
    inputContentDiv.textContent = inputText;
    
    post.appendChild(dateContentDiv);
    post.appendChild(inputContentDiv);
    
    posts.appendChild(post);
}

post_btn.addEventListener("click", post);
// 3-1
var mcount = document.getElementById("mcount");
var count = 0;
mcount.addEventListener("mouseover", increase);


function increase() {
    count = count + 1;
    mcount.innerText = count;
}

// 3-2
function post() {
    var textArea = document.getElementById("textArea");
    // read user input from textArea into userInput variable
    var userInput = textArea.value;

    // create divs for userOutput
    var post_time = document.createElement('div');
    var post_content = document.createElement('div');
    var post = document.createElement('div'); // contains post_time and post_content
    var posts = document.getElementById("posts");

    // assign values to post_time and post_content
    // post_time.textContent = new Date();
    var date_time = new Date();
    post_time.innerText = date_time.toLocaleString();
    post_time.style.fontWeight = "bold";
    post_time.style.color = "grey";
    // remember to .classList.add()
    post_time.classList.add("post-time");
    post_content.classList.add("post-content");
    post_content.innerText = userInput;

    // append those userOutputs into each post
    post.classList.add("post");
    post.appendChild(post_time);
    post.appendChild(post_content);
    posts.appendChild(post);

    // textArea.value = "";



    // 3-4
    if(blueText.checked) {
        post_content.style.color = "blue";
    } else if (redText.checked) {
        post_content.style.color = "red";
    }

    // 3-6
    if(boldText.checked) {
        post_content.style.fontWeight = "bold";
    }
    if(italicText.checked) {
        post_content.style.fontStyle = "italic";
    }

    

    // 3-8
    var delete_btn = document.createElement('button');
    delete_btn.textContent = "x";
    delete_btn.classList.add("delete_btn");
    post.appendChild(delete_btn);
    delete_btn.addEventListener("click", deletePost);
    function deletePost() {
        posts.removeChild(post);
    }
}




// 3-4
function postnTimes() {
    var numberText = document.getElementById("numberText");
    for (let i = 0; i < numberText.value; i++) {
        post();
    }
}

var post_btn = document.getElementById("post_btn");
post_btn.addEventListener("click", postnTimes);



// 3-3
var menu_btn = document.getElementById("menu_btn");
menu_btn.addEventListener("click", menuButton);

var back_btn = document.getElementById("back_btn");
back_btn.addEventListener("click", backButton);

const mainTab = document.getElementById("main");
const menuTab = document.getElementById("menu");

function menuButton() {
    menuTab.style.display = "block";
    mainTab.style.display = "none";
}

function backButton() {
    menuTab.style.display = "none";
    mainTab.style.display = "block";
}



// 3-5

var bgColorInput = document.getElementById("bgColorInput");
bgColorInput.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor() {
    const pageBody = document.body;
    pageBody.style.backgroundColor = bgColorInput.value;
}

// const body = document.getElementsByTagName("body");
// var bgColourInput = document.getElementById("bgColourInput");

// function changeBgColour() {
//     var newBackground = bgColourInput.value;
//     body.style.backgroundColor = newBackground;
// }

// body.addEventListener("change", changeBgColour);
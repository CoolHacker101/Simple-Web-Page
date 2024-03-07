// Likes Increase By One When Clicked
let likeCount = 68
var numLikes = document.querySelector(".numOfLikes");

function heartLikes() {
    likeCount++;
    numLikes.innerText = likeCount;
}

let likeCount2 = 212
var numLikes2 = document.querySelector(".numOfLikes2");

function heartLikes2() {
    likeCount2++;
    numLikes2.innerText = likeCount2;
}

let likeCount3 = 32
var numLikes3 = document.querySelector(".numOfLikes3");

function heartLikes3() {
    likeCount3++;
    numLikes3.innerText = likeCount3;
}



// Join Button Is Removed When CLicked
function joinButton(id) {
    var element = document.querySelector(id);
    element.remove();
}



// Alert Message For Search Result
function displayMessage() {
    var display = document.getElementById("search").value;
    alert("You searched for" + " " + display);
}
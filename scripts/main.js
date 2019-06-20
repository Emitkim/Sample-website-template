var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');


/*myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/prettyplace.png'){
        myImage.setAttribute ('src', 'images/bear.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/prettyplace.png');
    }
}
*/
myImage.onmouseover = function(){
    var mySrc = myImage.getAttribute('src');
        myImage.setAttribute ('src', 'images/bear.jpeg');
   
}
myImage.onmouseout = function(){
    var mySrc = myImage.getAttribute('src');
        myImage.setAttribute ('src', 'images/prettyplace.png');
    }


var myButton = document.getElementById('button1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'This is me! ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is me! ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
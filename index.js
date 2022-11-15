// if you want to store query selector all result in one array then do following steps;
// write query in square brackets and put three dot at beggining of it.
var buttons = [...document.querySelectorAll(".drum")]
var sizeOfButtons = buttons.length;
document.addEventListener("keypress",playSound1);

for(var i=0;i<sizeOfButtons;i++){
    buttons[i].addEventListener("click",playSound);
}

function playSound1(event){

    // here event is bunch of properties that keypress can hold one of them is key which
    // tells us which key was pressed

    var key = event.key;
    makeAnimation(key);

    switch(key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
}

function playSound() {

    //  This Audio is create one <audio> HTML element in backend
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    var key = this.innerHTML;
    makeAnimation(key);
    switch(key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
}

function makeAnimation(source) {

    document.querySelector("."+source).classList.add("pressed");

    // setTimeout(func , time) is the function that can hold time ms and after that we applied this func 
    setTimeout(function() {
        document.querySelector("."+source).classList.remove("pressed");
    },100)
}

/*
    MAIN GAME DIALOG
    THIS IS WHERE YOU ADD THE DIALOGS AND NAMES
*/

var intervalID;

var switchSlides = true;

var slideIndex = 0;

var typingSpeedOfText = 20;

let button = document.getElementById('dialog-box');
let textBox = document.getElementById('dialog');
let currIndex = 0;

var gameObj = new gameScript();

button.addEventListener('click', function () {
    gameObj.run();
});

function gameScript() {

    /* 
        This is where you add your dialog!
    */

    var dialog = {
        text: [

            "Testing this long text for education purposes Testing this long text for education purposes",

            "Easy Boi! Calm Thy Arms",

            "Visual Novel Engine created by Keiji Mizumura",

            "Pure JavaScript! No Libraries Imported Somewhere",

            "Inspired by Renpy"

        ]

    };

    // DONT TOUCH THE CODE BELOW

    // THIS IS NOT USER DEFINED FUNCTIONS 

    // TECHNICALLY IT IS BUT IT YOU ARE THE USER :D

    this.run = function () {
        if (switchSlides === true) {
            typed(dialog.text[slideIndex], true, typingSpeedOfText);
            switchSlides = false;
        }
        else if (switchSlides === false) {
            typed(dialog.text[slideIndex], false, typingSpeedOfText);
            switchSlides = true;
            slideIndex++;
        }

    }

}

function typed(text, bool, typingSpeed) {
    textBox.innerHTML = "";

    if (text == undefined) {
        console.log('err');
        clearInterval(intervalID);
    }
    else {
        try {
            if (bool === true) {
                var index = 0;
                function typing() {

                    if (index > text.length) {
                        console.log(text.length);
                        clearInterval(intervalID);
                        switchSlides = true;
                        slideIndex++;
                    }
                    else {
                        textBox.innerHTML += ((text.charAt(index) == " ") ? "&nbsp;" : text.charAt(index));
                        index++;
                    }
                }
                intervalID = setInterval(typing, typingSpeed);
            }
            else if (bool === false) {
                clearInterval(intervalID);
                console.log('cleared');
                textBox.innerHTML = "";
                textBox.innerHTML = text;
            }
        }
        catch (err) {
            console.log("An Error Occured");
            clearInterval(intervalID);
        }
    }



}

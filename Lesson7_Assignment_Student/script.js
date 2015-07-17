/**
Program Name: Recipe Display Application
Author: Sydney Dell
Date: 7-9-2015
Filename: script.js
*/

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display()

/*
$("h3").click(display);
*/

$("h3").click(display2);

function display2(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}
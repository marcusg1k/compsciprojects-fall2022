window.addEventListener("load", function ()
{
let clickedCounterElement = document.getElementById("clickcounter");
let clickButtonElement = document.getElementById("clickbutton");

let counter = 0;

let clickButtonFunction = function () 
{
    counter++;


    clickedCounterElement.innerHTML = counter; 
};

  
clickButtonElement.addEventListener("click", clickButtonFunction);
});
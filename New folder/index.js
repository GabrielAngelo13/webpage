const display = document.getElementById("display");
function appendToDisplay(input){
display.value+=input;
}
function clearDisplay(){
display.value ="";
}
function calculateResult(){
    try{
     display.value= eval(display.value);
    }
    catch(error){
        display.value="Error"
    }
}
//document.onkeydown = function (event) {
    //const key = event.key;
   // if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        //appendToDisplay(key);
    //} else if (key === 'Enter') {
       // calculateResult();
    //} else if (key === 'Escape') {
        //clearDisplay();
    //}
//};
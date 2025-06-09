const textBox = document.getElementById("textBox");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");

let temp;
function convert(){
    if(fahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * (9/5)+32;
        result.textContent = temp.toFixed(1) + "°F"
    }else if(celsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32 )* (5/9);
        result.textContent = temp.toFixed(1) + "°C"
    }else{
        result.textContent = "Please choose one unit";
    }
}
function resetForm(){
    textBox.value=0;
    fahrenheit.checked = false;
    celsius.checked = false;
    result.textContent = "";
}
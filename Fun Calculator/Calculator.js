function Display(values) {
    document.getElementById("result-display").value += values;//concatenating the value

}

function Clear() {
    document.getElementById("result-display").value = "";//clearing the value
}

function Calculate(){
    var numbers = document.getElementById("result-display").value;//getting the value
    var result = eval(numbers);//evaluating the value saved in number1
    document.getElementById("result-display").value = result;//displaying the result
}
var output = document.getElementById('output'); 
function addNum(input) {
    output.value += input;
}
function addTogether() {
    output.value = eval (output.value)
}
function clearAll(){
    output.value = "";
}

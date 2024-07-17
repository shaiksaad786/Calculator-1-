function appendNumber(num){
    document.getElementById('result').value+=num;
}
function appendOperator(operator){
    document.getElementById('result').value+=operator;
}
function calculate(){
    let value = document.getElementById('result').value;
    let Result = eval(value);
    document.getElementById('result').value = Result;
    /*catch (error) {
        document.getElementById('result').value = 'Error';
    }*/
}
function clearResult(){
    document.getElementById('result').value = '';
}

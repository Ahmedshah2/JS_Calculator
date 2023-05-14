var result = document.getElementById("result").value

function getValue(num) {
    document.getElementById("result").value+= num
}

function clearCalc() {
    document.getElementById("result").value = ""
}

function getResult() {
   document.getElementById("result").value = eval(document.getElementById("result").value)
}
function delVal() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0,result.length-1);
}
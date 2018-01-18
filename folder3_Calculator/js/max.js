var X = document.getElementById("text");
var Y = document.getElementById("text2");
function ba(){
    document.getElementById("text3").value = Number(X.value)+Number(Y.value);
}
function lob(){
    document.getElementById("text3").value = Number(X.value)-Number(Y.value);
}
function kun(){
    document.getElementById("text3").value = Number(X.value)*Number(Y.value);
}
function lal(){
    document.getElementById("text3").value = Number(X.value)/Number(Y.value);
}
// console.log("test")
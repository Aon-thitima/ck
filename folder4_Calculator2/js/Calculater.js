var inp = document.getElementById("text");
var Zara ;
var opertor;
function btnBT7(){
    inp.value += 7 ;
}
function btnBT8(){

    inp.value += 8 ;
}
function btnBT9(){
    inp.value += 9 ;
}
function btnBT4(){
    inp.value+= 4 ;
}
function btnBT5(){
    inp.value += 5 ;
}
function btnBT6(){
    inp.value += 6 ;
}
function btnBT1(){
    inp.value += 1 ;
}
function btnBT2(){
    inp.value += 2 ;
}
function btnBT3(){
    inp.value += 3 ;
}
function btnBT0(){
    inp.value += 0 ;
}
function btnBTC(){
    inp.value = null;
}
function btnBak(){
    Zara = document.getElementById("text").value ;
    console.log(Zara);
    opertor = "+";
    document.getElementById("text").value = ""; 
}
function btnlab(){
    Zara = document.getElementById("text").value;
    console.log(Zara);
    opertor = "-";
    document.getElementById("text").value = "" ;
}
function btnKun(){
    Zara = document.getElementById("text").value;
    console.log(Zara);
    opertor = "*";
    document.getElementById("text").value = "" ;
}
function btnLal(){
    Zara = document.getElementById("text").value;
    console.log(Zara);
    opertor = "/";
    document.getElementById("text").value = "" ;
}
function btnBTT(){
    var keep = document.getElementById("text").value ;
    console.log(keep);
    // inp.value = Number(Zara) + Number(keep);
    if (opertor == "+") {
        inp.value = Number(Zara) + Number(keep);
        console.log(opertor);
    } else if(opertor == "-"){
        inp.value = Number(Zara) - Number(keep);
        console.log(opertor);
    } else if (opertor == "*") {
        inp.value = Number(Zara) * Number(keep);
        console.log(opertor);
    } else if (opertor == "/") {
        inp.value = Number(Zara) / Number(keep);
        console.log(opertor);
    }
}
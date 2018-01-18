var bat=0;
var money=0;
function myFunction() {
    var price = document.getElementById("price").value;
    var num = document.getElementById("num").value;
    bat = price*num;
    money += bat;
    console.log(money);
    document.getElementById("bat").value = money;
    console.log(bat); 
    price = document.getElementById("price").value = "";
    num = document.getElementById("num").value ="";
}

function Functionmy() {
    var pay = document.getElementById("pay").value;
    var change = pay-money;
    document.getElementById("change").value = change;
    console.log(change);
    pay = document.getElementById("pay").value = "";
}
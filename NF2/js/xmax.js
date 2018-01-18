function myfunction(){
    var keep = [];
    var fname = document.getElementById("fname").value;
    var num = document.getElementById("num").value;
    keep = [fname,num];
    console.log(keep);
    document.getElementById("fname").value = "";
    document.getElementById("num").value = "";
}
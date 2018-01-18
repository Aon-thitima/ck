var num = [];

function Add(){
    var Za = document.getElementById("num").value;
    num.push(Za);
    console.log(num);
    document.getElementById("num").value = "";
}
function Sort(){
    var fool = num;
    for(var i = 0;i < length - 1;i++){
       console.log(num);
       
    }

}
// function Sort(){
//     num.sort(function(a,b){return a-b});
//     document.getElementById("num").value = num;
//     console.log(num);
// }
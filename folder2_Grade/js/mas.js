function alertMe(value){
    console.log(value)
    alert(value)
};

let p = document.getElementById('pUpdate');

document.getElementById('btn2').onclick = function(){
    p.innerHTML = '<strong> Thank you </strong>';
};

// var num = [];
var Name =[];    
function myFuncition(){
    var myShow ={"Name":null,
                 "num":null};
    Name = document.getElementById("Name").value;  
    // console.log(Name);
    num = document.getElementById("num").value;
    // console.log(num);
    myShow.Name = Name;
    myShow.num = num;
    Name = myShow.Name;
    console.log(Name);
    document.getElementById("Name").value = "";
    document.getElementById("num").value = "";
}   



function myShow(){
var grade ;
// console.log(myShow.Name);
var nu = num;
    if(nu > 80){
        grade = "A";
    }else if(nu >= 75){
        grade = "B+";
    }else if(nu >= 70){
        grade = "B";
    }else if(nu >= 65){
        grade = "C+";
    }else if(nu >= 60){
        grade = "C";
    }else if(nu >= 55){
        grade = "D+";
    }else if(nu >= 50){
        grade = "D";
    }else if(nu < 49){
        grade = "F";
    }else{
        grade = "no value";
    }

    document.write(Name + grade);
}
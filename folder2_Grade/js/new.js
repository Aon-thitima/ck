var grade_list = [];
var Name = [];
var num = [];

function myFunction(){
    var grade = {"Name" : null,
                 "num" : null};
    Name = document.getElementById("Name");
    num = document.getElementById("num");
    grade.Name = Name.value;
    grade.num = num.value;
    grade_list = grade;
    console.log(grade_list);
    Name.value = "";
    num.value = "";
}

// function SG(){
//     for()
// }

function myShow(){
    var grade ;
    console.log(Name);
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
        }
        else{
            grade = "no value";
        }
    
        document.write(Name + grade);
    }
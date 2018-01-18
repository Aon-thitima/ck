// function testVariable(){
//     var a = true;
//     let loc = false;
    
// }
// console.log(a)
// console.log(let)

//     var show = firsFunction()
//     document.getElementById("show").innerHTML ="show";


function firsFunction(){
    var width = 80;
    var heigth = 2;
    var area = width * heigth;
    console.log(area);
    
    var wid = 1000;
    var area = wid - area;
    // var heigth = 160;
    
    return area;
    
}
console.log(firsFunction());

// function firsFunction(){
//     var width = 1000;
//     var heigth = 160;
//     var area = width - heigth;
//     // console.log(area);
//     return area;
    
// }
// console.log(firsFunction());

// var test = ["Aon","P'Bud","Teacher","Aon"];

var test = {firsname:"Thitima",
            lastname:"Mitrtakhob",
            age:"20"};
    console.log(test);

// var list = ["volvo","Benz","Toyota","Honda","Jeep"];
// var i;
// for(let i =0; i < list.length; i++){
//     console.log(list[i])
// }

// for(i in test){
//     console.log(test[i])
// }

// console.log("Success");
// do{

// }
// while(list< list.length)
// console.log()

// while(i < list.length){
//     console.log(list[i]);
//     i++;
// }
// while(list[i]){
    // console.log(list[i]);
//     i++;
// }
// console.log(test.age);


// var grade;
// var point = 78;
// var point = 77;




if(point >= 80){
    grade = "A";
} else if(point >= 75){
    grade = "B+";
}else if(point >= 70){
    grade = "B";
}else if(point >= 65){
    grade = "C+";
}else if(point >= 60){
    grade = "C";
}else if(point >= 55){
    grade = "D+";
}else if(point >= 50){
    grade = "D";
}else if(point <= 50){
    grade = "F";
}

// console.log(grade);

switch(point){
    case 80:
        grade = "A";
        break;
    case 75:
        grade = "B+";
        break;
    case 70:
        grade = "B";
        break;
    case 65:
        grade = "C+";
        break;
    case 60:
        grade = "C";
        break;
    case 55:
        grade = "D+";
        break;
    case 50:
        grade = "D";
        break;
    default:
        grade = "F";
}







// console.log(test.firsname);
// console.log(test["firsname"]);

function SaveData(){
    var Username = document.getElementById("user");
    var Email = document.getElementById("email");
    var Password = document.getElementById("psw");
    var Repeat = document.getElementById("rpsw");
    insertData(user.value, email.value, psw.value,
        rpsw.value)
    // var Name = {}
}

function insertData(user,email,psw,rpsw){
    var firebaceRef = firebace.database().ref("user");
    firebaceRef.push({
        Username:user,
        Email:emailRegis,
        Password:psw,
        Repeat:rpsw
    });
    console.log("Insert Success");
}

function SingUp(){
    var Email = document.getElementById("emailRegis");
    var Password = document.getElementById("pswRegis");
    firebace.auth().createUserWithEmailAndPassword(email,Password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode ==='auth/weak-password'){
            alert('the password is too weak')
        } else {
            alert(errorMessage)
        }
        console.log(error);
    };
    ))
}
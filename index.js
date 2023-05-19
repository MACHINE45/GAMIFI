function closebtn() {  
    document.getElementById("loginpop").style.display = "none";  
    document.getElementById("registerpop").style.display = "none"; 

}
function register() {  
    document.getElementById("registerpop").style.display = "none"; 
    document.getElementById("loginpop").style.display = "none";  
}
function registerbtn() {   
    document.getElementById("registerpop").style.display = "inline-block";
    document.getElementById("loginpop").style.display = "none";  
}

function contactnumber() {
    const n = document.getElementById("clientnumber").value;
    var length = n.length;
    if (length < 10) {
        alert("Please enter 10 digit number ")
    }

    else {
        const number = "+91" + n;
        console.log(number);
        document.getElementById("loginpop").style.display = "none";
        document.getElementById("otppop").style.display = "block";
        firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            coderesult = confirmationResult;
        }).catch(function (error) {
            alert(error.message + "inside contact ");
        });
    }
}

function signup() {
    document.getElementById("loginpop").style.display = "block";
    // document.getElementById("otppop").style.display = "none"; 
    const username=document.getElementById("usename");
    const password=document.getElementById("password");
    const email=document.getElementById("email");
    const number=document.getElementById("clientnumber");

    console.log(username,password,email,number);
    
}
var uname=document.getElementById("uname");
var email=document.getElementById("email");
var password=document.getElementById("password");
var alertForm= document.getElementById("alertForm");
var alertemail=document.getElementById("alertemail");
var alertname=document.getElementById("alertname");
var alertpass=document.getElementById("alertpass");
var MsgExist=document.getElementById("MsgExist");
var allrequired=document.getElementById("allrequired");
var alertlogin=document.getElementById("alertlogin");


let users;
if(localStorage.getItem("userData")==null){
     users=[];
}
else{
    
     users=JSON.parse(localStorage.getItem("userData"))
}

 function createUser(){
    
    
    var singleUser={
        uname:uname.value,
        email:email.value,
        password:password.value
    
    }
    users.push(singleUser)
    console.log(users)
    var user = JSON.stringify(users)
    localStorage.setItem("userData", user)
}

function btnsign(){
    formvalid();
    validName();
    validEmail();
    validPass();
    isExist();
    
    if(formvalid() == true && validName()==true && validEmail() == true && validPass()==true  && isExist()==false){
    
    createUser();
    location.href="/login.html"
    }
}
 

 function isExist(){
    for( i=0; i<users.length; i++){

   if(users[i].uname.toLowerCase() == uname.value.toLowerCase() || users[i].email.toLowerCase()== email.value.toLowerCase()){
    uname.classList.remove("is-valid")
    uname.classList.add("is-invalid")
    email.classList.remove("is-valid")
    email.classList.add("is-invalid")
    password.classList.remove("is-valid")
    password.classList.add("is-invalid")
    alertForm.classList.replace("d-none","d-block")
    MsgExist.classList.add("d-block")
    MsgExist.classList.remove("d-none")
    allrequired.classList.add("d-none")
       return true
   }
    }
    return false  
 }

function validName(){
   var regName=/^[a-zA-Z][a-zA-Z0-9]{2,20}$/;
    var matchName=regName.test(uname.value)
    if(matchName==true){
        uname.classList.remove("is-invalid");
        uname.classList.add("is-valid");
        alertname.classList.add("d-none")
        return true;
    }
    else{
        uname.classList.add("is-invalid");
        uname.classList.remove("is-valid");
        alertname.classList.remove("d-none")
        return false;
    }
    }
    
    
function validEmail(){
    var regEmail=/^[a-z][a-zA-z0-9\-\.\_]+@([a-zA-z0-9-]+\.)+[a-zA-z0-9-]{2,4}$/
    var matchEmail=regEmail.test(email.value)
        if(matchEmail==true)
        {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
            alertemail.classList.add("d-none")
            return true;
        }
        else{
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            alertemail.classList.remove("d-none")
            return false;
        }
    }

 
function validPass(){
   var regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
   var matchPass=regPass.test(password.value)
   if(matchPass==true){
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    alertpass.classList.add("d-none")
    return true;

}
else{
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    alertpass.classList.remove("d-none")
    return false;
}
}

function formvalid(){
    if(uname.value != "" && email.value !="" && password.value !=""){

        
        uname.classList.remove("is-invalid");
        uname.classList.add("is-valid");
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        alertForm.classList.add("d-none")
      return true;
    
        
    }
    else {
        
            alertForm.classList.remove("d-none")
            return false
    }
   
}
 
function btnlogin() {
    for( i=0; i<users.length; i++){
    if( users[i].email.toLowerCase()== email.value.toLowerCase() && users[i].password==password.value){
            alertlogin.classList.add("d-none")
            alertlogin.classList.remove("d-block")
            localStorage.setItem('loginData', users[i].uname)
            location.href="./index.html"
    }
    else{
        alertlogin.classList.add("d-block")
        alertlogin.classList.remove("d-none")
    }
}
}

function logout(){
    localStorage.removeItem("loginData")
    
}
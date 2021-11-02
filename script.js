function myFunction(){
    var username=document.getElementById("user").value;
    var address=document.getElementById("email").value;
    alert(document.getElementById("message").innerHTML=username+", thank you for your details. We will be in touch via "+address+" shortly!");
    hide();
}

function hide(){
    document.getElementById("myForm").style.display="none";
}
/*function message(){
    document.getElementById("name").innerHTML+=userName;
}*/

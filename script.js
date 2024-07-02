function submissionSuccess(){
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let message = document.forms["form"]["message"].value;
    let phonenumber = document.forms["form"]["phonenumber"].value;

    if(name == "" || email == "" || phonenumber == "" || message == ""){
        alert('Please fill field!');
        return;
    }else{
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address");
            return;
        }else{
            alert('Request Sent Success!');
        }
    }
    
    
    

  
}


function submissionSuccess(){
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let message = document.forms["form"]["message"].value;
    if(name == "" || email == ""){
        alert('Please fill field!');
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return false;
    }
    if(message == ""){
        alert('Enter your message');
        return false;
    }

    alert('Request Sent Success!');
}


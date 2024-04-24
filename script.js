function SendMail(){
    let parms ={
        message : document.getElementById("message").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
    }
    emailjs.send("service_s5egfm5", "template_bgysfm1", parms)
        .then(function() {
            alert("Email Sent Successfully");
            // Clear the input fields
            document.getElementById("message").value = "";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
        })
        .catch(function(error) {
            console.error('Email send failed:', error);
            // Optionally handle the error here
        });
}

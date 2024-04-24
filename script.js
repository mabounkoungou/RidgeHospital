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

function Subscribe() {
    let email1 = document.getElementById("email1").value;

    let parms = {
        email: email1
    };

    emailjs.send("service_wmm816b", "template_6tzbt3p", parms)
        .then(function() {
            // Subscription successful, you can perform any actions here if needed
            alert("Subscription Successful!");
            // Clear the input field after successful subscription
            document.getElementById("email1").value = "";
        })
        .catch(function(error) {
            // Subscription failed, handle the error
            console.error("Subscription failed:", error);
            // Optionally, provide feedback to the user about the failure
            alert("Subscription failed. Please try again later.");
        });
}

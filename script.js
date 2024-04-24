function SendMail(){
    let parms ={
        message : document.getElementById("message").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
    }
    emailjs.send("service_s5egfm5", "template_bgysfm1", parms).then(alert("Email Sent Successfully"))
}
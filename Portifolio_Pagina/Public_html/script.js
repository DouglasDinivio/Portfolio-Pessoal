function sendMail(event) {
    event.preventDefault();

    let parms = {
        Nome: document.getElementById("Nome").value,
        email: document.getElementById("reply_to").value,
        Assunto: document.getElementById("Assunto").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_g5i1mrg", "template_ku0krw9", parms)
        .then(function(response) {
            alert("Email enviado!!");
        }, function(error) {
            alert("Falha ao enviar email: " + JSON.stringify(error));
        });
}


/*
emailjs.send("service_g5i1mrg","template_ku0krw9",{
Assunto: "teste vaga",
Nome: "Douglas Dinívio",
message: "OLa",
reply_to: "srbila@homail.com",
});*/
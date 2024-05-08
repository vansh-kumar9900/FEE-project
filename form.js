document.getElementById("sgn").addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();



this is the commmit from the feature branch

    if(email === "" || password === ""){
        alert("Login unsuccessful. Please enter some text.");
    } else {
        console.log("Email:", email);
        console.log("Password:", password);
    }

    const correctEmail = "vansh9900@gmail.com";
    const correctPassword = "vansh9900";

    if(correctEmail === email && correctPassword === password){
        alert("Login successful!");
    } else {
        alert("Login unsuccessful");
    }
});


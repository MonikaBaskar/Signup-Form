
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form"); // Corrected the form ID
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = form.elements["username"].value;
        const email = form.elements["email"].value;
        const password = form.elements["password"].value;
        const confirmPassword = form.elements["confirm-password"].value;

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
        } else if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
        } else {
            alert(`Sign up successful!\nUsername: ${username}\nEmail: ${email}`);
            // Redirect to another page
            window.location.href = "login.html";
        }
    });
});



  


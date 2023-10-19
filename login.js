document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = form.elements["username"].value;
        const password = form.elements["password"].value;

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
        } else {
            alert(`Login successful!\nUsername: ${username}`);
            // Redirect to another page after successful login
            window.location.href = "todo.html";
        }
    });
});


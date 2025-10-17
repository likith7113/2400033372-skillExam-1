// app.js - feature-login branch version

document.addEventListener('DOMContentLoaded', function() {
    console.log("Student Portal Loaded");
    console.log("Login feature started");

    const welcomeMsg = document.getElementById('welcome');
    if (welcomeMsg) {
        welcomeMsg.textContent = "Welcome to the Student Portal!";
    }

    // Simulate a simple login function
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert("Login feature coming soon!");
        });
    }
});

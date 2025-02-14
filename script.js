function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return regex.test(password);
}

function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const message = document.getElementById("signup-message");

  if (!validatePassword(password)) {
    message.style.color = "red";
    message.textContent =
      "Password must be at least 8 characters, contain one capital letter.";
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  message.style.color = "green";
  message.textContent = "Account created successfully! You can now log in.";

  // Show login form and hide signup form
  document.querySelector(".signup-container").style.display = "none";
  document.querySelector(".login-container").style.display = "block";
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const message = document.getElementById("login-message");

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    setTimeout(() => {
      window.location.href = "welcome.html"; // Redirect to a new page after successful login
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password.";
  }
}

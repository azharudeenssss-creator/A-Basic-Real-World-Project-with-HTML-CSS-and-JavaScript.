const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  const length = password.length;

  if (length === 0) {
    passwordInput.style.borderColor = "grey";
    strengthText.textContent = "";

  } else if (length <= 2) {
    passwordInput.style.borderColor = "red";
    strengthText.textContent = "Weak";
    strengthText.style.color = "red";

  } else if (length <= 4) {
    passwordInput.style.borderColor = "orange";
    strengthText.textContent = "Medium";
    strengthText.style.color = "orange";

  } else if (length <= 6) {
    passwordInput.style.borderColor = "blue";
    strengthText.textContent = "Okay";
    strengthText.style.color = "blue";
    
  } else if (length >= 8) {
    passwordInput.style.borderColor = "green";
    strengthText.textContent = "Good";
    strengthText.style.color = "green";
  }
});

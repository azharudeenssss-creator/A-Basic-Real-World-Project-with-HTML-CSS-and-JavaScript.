const toggle = document.getElementById("togglePassword");
const input = document.getElementById("password");

toggle.addEventListener("click", () => {
  const isHidden = input.type === "password";
  input.type = isHidden ? "text" : "password";
  toggle.textContent = isHidden ? "🙈" : "👁️";
});

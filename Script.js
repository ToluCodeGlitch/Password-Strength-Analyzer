const passwordInput = document.getElementById("password");
const resultText = document.getElementById("result");

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  resultText.textContent = strength.message;
  resultText.style.color = strength.color;
});

function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  if (strength === 0) {
    return { message: "", color: "gray" };
  } else if (strength <= 2) {
    return { message: "Weak Password", color: "red" };
  } else if (strength === 3 || strength === 4) {
    return { message: "Moderate Password", color: "orange" };
  } else {
    return { message: "Strong Password", color: "green" };
  }
}

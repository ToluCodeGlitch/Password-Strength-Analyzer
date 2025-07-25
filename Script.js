const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[\W_]/.test(password)) score++;

  switch (score) {
    case 0:
    case 1:
      strengthBar.style.width = "20%";
      strengthBar.style.background = "#ff4d4d";
      strengthText.textContent = "Very Weak 🔓";
      break;
    case 2:
    case 3:
      strengthBar.style.width = "50%";
      strengthBar.style.background = "#ffaa00";
      strengthText.textContent = "Moderate 🛡️";
      break;
    case 4:
    case 5:
      strengthBar.style.width = "100%";
      strengthBar.style.background = "#00cc66";
      strengthText.textContent = "Strong 🔐";
      break;
  }
});

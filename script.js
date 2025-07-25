document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const strengthText = document.getElementById("strengthText");
  const strengthBar = document.getElementById("strengthBar");

  passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const result = checkPasswordStrength(password);
    strengthText.innerText = result.label;
    strengthText.style.color = result.color;
    strengthBar.style.width = result.percent + "%";
    strengthBar.style.backgroundColor = result.color;
  });

  function checkPasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length >= 12) score++;

    const levels = [
      { label: "Very Weak", color: "red", percent: 20 },
      { label: "Weak", color: "orangered", percent: 40 },
      { label: "Moderate", color: "orange", percent: 60 },
      { label: "Strong", color: "lightgreen", percent: 80 },
      { label: "Very Strong", color: "green", percent: 100 },
    ];

    return levels[Math.min(score, levels.length - 1)];
  }
});

const passwordInput = document.getElementById("password");
const resultText = document.getElementById("result");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const analysis = analyzePassword(password);

  resultText.textContent = analysis.message;
  resultText.style.color = analysis.color;
});

function analyzePassword(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (password.length === 0) {
    return { message: "", color: "#fff" };
  }

  if (score <= 2) {
    return { message: "Weak Password", color: "#ff4d4d" };
  } else if (score === 3 || score === 4) {
    return { message: "Moderate Password", color: "#ffc107" };
  } else {
    return { message: "Strong Password", color: "#00e676" };
  }
}

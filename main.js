
// === Mantener modo oscuro entre páginas ===
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
} else {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
}

// === Switch modo oscuro ===
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');

if (themeSwitch && themeLabel) {
  themeSwitch.checked = document.body.classList.contains('dark-mode');

  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    themeLabel.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}

// === Login / Registro / Overlays ===
const container = document.getElementById('container');
if (container) {
  const signUpDesktop = document.getElementById('signUp');
  const signInDesktop = document.getElementById('signIn');
  const mobileSignUp = document.getElementById('mobileSignUp');
  const mobileSignIn = document.getElementById('mobileSignIn');

  // Escritorio
  signUpDesktop?.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInDesktop?.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });

  // Móvil
  mobileSignUp?.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('show-signup'); // activa registro móvil
    container.classList.add("right-panel-active");
  });

  mobileSignIn?.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.remove('show-signup'); // vuelve al login móvil
    container.classList.remove("right-panel-active");
  });

  // Login
  const loginForm = document.getElementById('loginForm');
  loginForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const validEmail = "admin@drbigotes.com";
    const validPhone = "1234567890";
    const validPassword = "123456";

    if ((userInput === validEmail || userInput === validPhone) && password === validPassword) {
      alert("✅ Login correcto. Bienvenido a Dr. Bigotes");
      window.location.href = "index.html";
    } else {
      alert("❌ Correo, número de teléfono o contraseña incorrectos");
    }
  });

  // Registro
  const registerForm = document.getElementById('registerForm');
  registerForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("✅ Cuenta creada con éxito. ¡Ahora puedes iniciar sesión!");
    container.classList.remove("right-panel-active");
    document.body.classList.remove('show-signup'); // aseguramos volver al login
    registerForm.reset();
  });
}

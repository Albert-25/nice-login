function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const alertBox = document.getElementById('alert');

    if (username === '' || password === '') {
        showAlert('Por favor complete todos los campos.', false);
    } else {
        showAlert('Inicio de sesión exitoso', true);
    }
}

function showAlert(message, success) {
    const alertBox = document.getElementById('alert');
    alertBox.textContent = message;

    if (success) {
        alertBox.classList.remove('success');
        alertBox.classList.remove('hidden');
        alertBox.classList.add('success', 'visible');
    } else {
        alertBox.classList.remove('hidden');
        alertBox.classList.add('visible');
    }

    setTimeout(() => {
        alertBox.classList.remove('visible');
        alertBox.classList.add('hidden');
    }, 3000);
}


// Configuração de Usuários
const users = [
    { username: 'LocalizeAqui', password: 'localize2024' },
    { username: 'ProfessorJohn', password: 'john2024prof' },
    { username: 'Breno Lira', password: '132644234' },
    { username: 'Laura', password: 'laura2024' },
    { username: 'Lyra', password: 'lyra2024' },
];

// Função para Exibir Modal
function showTopModal(message, type) {
    const modal = document.getElementById('top-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalIcon = document.getElementById('modal-icon');

    modalMessage.textContent = message;

    if (type === 'success') {
        modal.style.backgroundColor = '#4CAF50';
        modalIcon.className = 'fa fa-check-circle';
    } else {
        modal.style.backgroundColor = '#f44336';
        modalIcon.className = 'fa fa-times-circle';
    }

    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Função de Login
function login(event) {
    event.preventDefault();

    const userInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(u => u.username === userInput && u.password === passwordInput);

    if (user) {
        showTopModal('Login bem-sucedido!', 'success');
        localStorage.setItem('loggedIn', true);
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 3000);
    } else {
        showTopModal('Usuário ou senha incorretos', 'error');
    }
}

// Controle de Visibilidade da Senha
const iconPassword = document.getElementById('eye');  
const password = document.getElementById('password');  

password.addEventListener('input', () => {
    if (password.value !== '') {
        iconPassword.style.display = 'inline';  
    } else {
        iconPassword.style.display = 'none';  
    }
});

iconPassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';  
        iconPassword.classList.remove('fa-eye');  
        iconPassword.classList.add('fa-eye-slash');  
    } else {
        password.type = 'password';  
        iconPassword.classList.remove('fa-eye-slash');  
        iconPassword.classList.add('fa-eye');  
    }
});

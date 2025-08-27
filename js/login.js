document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = '';
    errorMessage.style.display = 'none'; 
    
    try {
        const response = await fetch('users.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo de usuarios');
        }
        const data = await response.json();
        
        const user = data.users.find(u => u.username === username && u.password === password);
        
        if (user) {
            alert('¡Login exitoso! Bienvenido, ' + username + '.');
            window.location.href = 'inicio2.html';
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos. Intenta de nuevo.';
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        errorMessage.textContent = 'Error al validar: ' + error.message;
        errorMessage.style.display = 'block';
    }
});
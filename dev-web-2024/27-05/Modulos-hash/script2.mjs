const login = sessionStorage.getItem('login');
if (login == 1) {
    document.getElementById('mensagem').innerHTML = '<h1>ESCONDIDA!</h1><button id="btn_logout">Sair</button>';
}
document.getElementById('btn_logout').onclick = () => {
    sessionStorage.login = false;
    window.location.href = 'index.html';
}
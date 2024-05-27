import { hex_md5 } from "./md5.mjs";
import { hex_sha1 } from "./sha1.mjs";

const alvo_md5 = '32308b4088dde0d22ca761fb0a6c430f';
const sal = 'abc';
let login;
//Senha é senha123
//Usando algoritmo MD5

document.getElementById('btn_login').onclick = () => {
    let entrada = document.getElementById('senha_md5').value;
    entrada += sal;
    const mensagem = document.getElementById('mensagem');
    if (hex_md5(entrada) === alvo_md5){
        mensagem.innerHTML = '<h1>senha correta</h1>';
        login = 1;
        sessionStorage.setItem('login', login);
        window.location.href='pagina2.html';
    } else {
        mensagem.innerHTML = '<h1>senha incorreta</h1>';
        login = 0;
        sessionStorage.setItem('login', login);
        window.location.href='pagina2.html';
    }
}

//Usando algoritmo SHA-1

const alvo_sha = 'f19da5cea472af8efd20aeaa622182eef6b50940';

document.getElementById('btn_login_sha').onclick = () => {
    let entrada = document.getElementById('senha_sha').value;
    entrada += sal;
    const mensagem = document.getElementById('mensagem');
    if (hex_sha1(entrada) === alvo_sha){
        mensagem.innerHTML = '<h1>senha correta</h1>';
        login = 1;
        sessionStorage.setItem('login', login);
        window.location.href='pagina2.html';
    } else {
        mensagem.innerHTML = '<h1>senha incorreta</h1>';
        login = 0;
        sessionStorage.setItem('login', login);
        window.location.href='pagina2.html';
    }
}
const formulario = document.getElementById('btn-submit');

const nomeUsuario = document.getElementById('nome');
const emailUsuario = document.getElementById('email');
const numeroTelefone = document.getElementById('numero');
const campoDeMensagem = document.getElementById('mensagem');

formulario.addEventListener('click', (e) => {
    e.preventDefault();

    checkCampos();
})
function checkCampos() {
    nomeUsuario.value === "" ? messagemDeErro(nomeUsuario) : mensagemDeSucesso(nomeUsuario);
    emailUsuario.value === "" ? messagemDeErro(emailUsuario) : mensagemDeSucesso(emailUsuario);
    numeroTelefone.value === "" ? messagemDeErro(numeroTelefone) : mensagemDeSucesso(numeroTelefone);
    campoDeMensagem.value === "" ? messagemDeErro(campoDeMensagem) : mensagemDeSucesso(campoDeMensagem);
}
function messagemDeErro(input) {
    const controle = input.parentElement;
    const small = controle.querySelector('small');
    small.innerText = 'campo obrigatório';

    controle.className = 'controle em-branco';
}
function mensagemDeSucesso(input) {
    const controle = input.parentElement;

    controle.className = 'controle com-texto';
}
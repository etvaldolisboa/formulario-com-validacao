/*
- pegar o id do formulario
- pagar cada id dos itens do formulario
- criar uma ação para o botao do formulario
- verificar se o item foi preenchido
    1 - SE nao foi preenchido mudar a borda para vermelho e mostrar o texto 'campo obrigatorio'
    2 - SE estiver com texto mudar a borda para verde lima */

// - pegar o id do formulario;
const formulario = document.getElementById('formulario');

// - pagar cada id dos itens do formulario
const nomeUsuario = document.getElementById('nome');
const emailUsuario = document.getElementById('email');
const numeroTelefone = document.getElementById('numero');
const campoDeMensagem = document.getElementById('mensagem');

// - criar uma ação para o botao do formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    checkCampos();
})
// - verificar se o item esta vazio ou foi preenchido
function checkCampos() {
    nomeUsuario.value === "" ? messagemDeErro(nomeUsuario) : mensagemDeSucesso(nomeUsuario);

    emailUsuario.value === "" ? messagemDeErro(emailUsuario) : mensagemDeSucesso(emailUsuario);

    numeroTelefone.value === "" ? messagemDeErro(numeroTelefone) : mensagemDeSucesso(numeroTelefone);

    campoDeMensagem.value === "" ? messagemDeErro(campoDeMensagem) : mensagemDeSucesso(campoDeMensagem);
}
// - funcao caso o item esteja vazio
function messagemDeErro(input) {
    const controle = input.parentElement;
    const small = controle.querySelector('small');

    // add a mgs de erro no small
    small.innerText = 'campo obrigatório';

    // mudar as class's
    controle.className = 'controle em-branco';
}
// caso tenha qualquer texto
function mensagemDeSucesso(input) {
    const controle = input.parentElement;

    // add a class de secesso
    controle.className = 'controle com-texto';
}
/*
// - pegar o id do formulario;
- pagar cada id dos itens do formulario
- criar uma ação para o botao do formulario
- verificar se o item foi preenchido

- pegar o botao do formulario.
    1 - verificar se foi escrito algo nos campos do formulario



- pegar o fumalario
-  pegar cada caixa do formulario
- criar uma validacao para cada caixa
    1 - se tiver assunto, alterar a borda para verde
    2 - se for clicado em 'enviar' sem que tenha preenchido todas os campos, mudar a borda para vermelho e mostrar a mesnagem 'campo obrigatorioa
- pegar o texto diitado em um input e armazenar em uam varivel




    */
// - pegar o id do formulario;
const formulario = document.getElementById('formulario');

// - pagar cada id dos itens do formulario
const nomeUsuario = document.getElementById('nome');
const emailUsuario = document.getElementById('email');
const numeroTelefone = document.getElementById('numero');
const campoDeMensagem = document.getElementById('mensagem');

// - criar uma ação para o botao do formulario
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkCampos();
})
// - verificar se o item foi preenchido
function checkCampos() {
    // const nomeUsuarioComTexto = nomeUsuario.value;
    // const emailUsuarioComTexto = emailUsuario.value;
    // const numeroTelefoneComNumero = numeroTelefone.value;
    // const campoDeMensagemComTexto = campoDeMensagem.value;

    if (nomeUsuario.value === "") {
        messagemDeErro(nomeUsuario);
    }else{
        mensagemDeSucesso(nomeUsuario);
    }

    if (emailUsuario.value === "") {
        messagemDeErro(emailUsuario);
    }else{
        mensagemDeSucesso(emailUsuario);
    }

    if (numeroTelefone.value === "") {
        messagemDeErro(numeroTelefone);
    }else{
        mensagemDeSucesso(numeroTelefone);
    }

    if (campoDeMensagem.value === "") {
        messagemDeErro(campoDeMensagem);
    }else{
        mensagemDeSucesso(campoDeMensagem);
    }

}

function messagemDeErro(input) {
    const controle = input.parentElement;
    const small = controle.querySelector('small');

    // add a msg de erro
    small.innerText = 'campo obrigatório';

    // aa a class de erro
    controle.className = 'controle em-branco';
}

function mensagemDeSucesso(input) {
    const controle = input.parentElement;
    
    // add a class de secesso
    controle.className='controle com-texto';
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  

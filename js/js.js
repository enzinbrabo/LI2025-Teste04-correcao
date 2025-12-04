document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const assuntoInput = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        let formularioValido = true;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
       
        if (!emailRegex.test(emailInput.value)) {
            definirErro(emailInput, 'Por favor, forneça um endereço de email válido.');
            formularioValido = false;
        } else {
            definirSucesso(emailInput);
        }


        if (assuntoInput.value.trim() === '') {
            definirErro(assuntoInput, 'O assunto não pode estar vazio.');
            formularioValido = false;
        } else {
            definirSucesso(assuntoInput, 'perfeito!'); 
        }

        
        if (mensagemInput.value.trim() === '') {
            definirErro(mensagemInput, 'Por favor, escreva uma mensagem.');
            formularioValido = false;
        } else {
            definirSucesso(mensagemInput);
        }

        if (formularioValido) {
            alert('Tudo certo! Formulário enviado.');
            
        }
    });

    function definirErro(input, mensagem) {
        const pai = input.parentElement;
        input.classList.remove('is-valid'); 
        input.classList.add('is-invalid');
        
        let divFeedback = pai.querySelector('.invalid-feedback');
        if (!divFeedback) {
            divFeedback = document.createElement('div');
            divFeedback.className = 'invalid-feedback';
            pai.appendChild(divFeedback);
        }
        divFeedback.innerText = mensagem;
    }

    function definirSucesso(input, mensagem = '') {
        const pai = input.parentElement;
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        
        const erroAntigo = pai.querySelector('.invalid-feedback');
        if (erroAntigo) erroAntigo.remove();

        if (mensagem) {
            let divFeedback = pai.querySelector('.valid-feedback');
            if (!divFeedback) {
                divFeedback = document.createElement('div');
                divFeedback.className = 'valid-feedback';
                pai.appendChild(divFeedback);
            }
            divFeedback.innerText = mensagem;
        }
    }
});
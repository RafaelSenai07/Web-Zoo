const formularioCadastro = document.querySelector("#form-cadastro");

if (formularioCadastro) {
  const mensagemSucesso = document.querySelector("#mensagem-sucesso");

  function mostrarErro(nomeCampo, mensagem) {
    const campo = formularioCadastro.elements[nomeCampo];
    const localErro = formularioCadastro.querySelector(`[data-error-for="${nomeCampo}"]`);
    if (localErro) localErro.textContent = mensagem;
    if (campo) campo.setAttribute("aria-invalid", mensagem ? "true" : "false");
  }

  function validarFormulario() {
    let formularioValido = true;
    const nome = formularioCadastro.elements.nome.value.trim();
    const email = formularioCadastro.elements.email.value.trim();
    const cep = formularioCadastro.elements.cep.value.replace(/\D/g, "");
    const assunto = formularioCadastro.elements.assunto.value;
    const mensagem = formularioCadastro.elements.mensagem.value.trim();
    const consentimento = formularioCadastro.elements.consentimento.checked;

    // Limpa mensagens anteriores antes de validar novamente.
    ["nome", "email", "cep", "assunto", "mensagem", "consentimento"].forEach((campo) => mostrarErro(campo, ""));

    if (nome.length < 5 || nome.split(/\s+/).length < 2) {
      mostrarErro("nome", "Informe seu nome completo.");
      formularioValido = false;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      mostrarErro("email", "Informe um e-mail válido, como nome@exemplo.com.");
      formularioValido = false;
    }

    if (cep.length !== 8) {
      mostrarErro("cep", "Digite um CEP com 8 números.");
      formularioValido = false;
    }

    if (!assunto) {
      mostrarErro("assunto", "Selecione um assunto.");
      formularioValido = false;
    }

    if (mensagem.length < 10) {
      mostrarErro("mensagem", "Escreva uma mensagem com pelo menos 10 caracteres.");
      formularioValido = false;
    }

    if (!consentimento) {
      mostrarErro("consentimento", "Marque a opção para continuar.");
      formularioValido = false;
    }

    return formularioValido;
  }

  formularioCadastro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensagemSucesso.hidden = true;

    if (!validarFormulario()) {
      const primeiroCampoInvalido = formularioCadastro.querySelector('[aria-invalid="true"]');
      if (primeiroCampoInvalido) primeiroCampoInvalido.focus();
      return;
    }

    const nome = formularioCadastro.elements.nome.value.trim();
    mensagemSucesso.textContent = `Cadastro recebido! Obrigado por participar do WebZoo, ${nome}. Este formulário é demonstrativo: nenhum dado foi enviado ou armazenado.`;
    mensagemSucesso.hidden = false;
    formularioCadastro.reset();

    // Os campos de endereço são limpos porque são preenchidos novamente pela consulta do CEP.
    ["rua", "bairro", "cidade", "estado"].forEach((id) => {
      document.getElementById(id).value = "";
    });
    mensagemSucesso.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

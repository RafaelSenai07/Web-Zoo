// Consulta o ViaCEP e pode preencher os campos de endereço do formulário.
async function consultarCep(cepDigitado) {
  const cep = cepDigitado.replace(/\D/g, "");

  if (cep.length !== 8) {
    throw new Error("Digite um CEP com 8 números.");
  }

  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!resposta.ok) {
    throw new Error("Não foi possível consultar o CEP agora. Tente novamente em instantes.");
  }

  const dados = await resposta.json();
  if (dados.erro) {
    throw new Error("Não encontramos esse CEP. Confira os números e tente novamente.");
  }

  return dados;
}

// Formata o CEP enquanto o visitante digita.
document.querySelectorAll('input[name="cep"]').forEach((campo) => {
  campo.addEventListener("input", () => {
    const numeros = campo.value.replace(/\D/g, "").slice(0, 8);
    campo.value = numeros.length > 5 ? `${numeros.slice(0, 5)}-${numeros.slice(5)}` : numeros;
  });
});

// Consulta de CEP na página Visite.
const formularioCepVisita = document.querySelector(".cep-form[data-cep-form]");
if (formularioCepVisita) {
  formularioCepVisita.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const campoCep = formularioCepVisita.querySelector('input[name="cep"]');
    const botao = formularioCepVisita.querySelector('button[type="submit"]');
    const mensagem = formularioCepVisita.querySelector("[data-cep-message]");
    const resultado = formularioCepVisita.querySelector("[data-cep-result]");

    mensagem.textContent = "";
    resultado.textContent = "";
    mensagem.className = "form-message";
    botao.disabled = true;
    botao.textContent = "Buscando endereço...";

    try {
      const dados = await consultarCep(campoCep.value);
      mensagem.textContent = "Endereço encontrado.";
      mensagem.classList.add("success");
      resultado.textContent = `Você vai sair de ${dados.logradouro || "logradouro não informado"}, ${dados.bairro || "bairro não informado"} - ${dados.localidade}/${dados.uf}.`;
    } catch (erro) {
      mensagem.textContent = erro.message;
      mensagem.classList.add("error");
    } finally {
      botao.disabled = false;
      botao.textContent = "Buscar endereço";
    }
  });
}

// Consulta de CEP no cadastro da página Participe.
const botaoCepCadastro = document.querySelector("#buscar-cep-cadastro");
if (botaoCepCadastro) {
  botaoCepCadastro.addEventListener("click", buscarCepCadastro);
}

async function buscarCepCadastro() {
  const campoCep = document.querySelector("#cep-cadastro");
  const mensagem = document.querySelector("#mensagem-cep-cadastro");
  const botao = document.querySelector("#buscar-cep-cadastro");

  mensagem.textContent = "Buscando endereço...";
  mensagem.className = "form-message";
  botao.disabled = true;

  try {
    const dados = await consultarCep(campoCep.value);
    document.querySelector("#rua").value = dados.logradouro || "";
    document.querySelector("#bairro").value = dados.bairro || "";
    document.querySelector("#cidade").value = dados.localidade || "";
    document.querySelector("#estado").value = dados.uf || "";
    mensagem.textContent = "Endereço preenchido com sucesso.";
    mensagem.classList.add("success");
  } catch (erro) {
    mensagem.textContent = erro.message;
    mensagem.classList.add("error");
  } finally {
    botao.disabled = false;
  }
}

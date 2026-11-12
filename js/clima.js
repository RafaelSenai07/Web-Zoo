const statusClima = document.querySelector("#clima-status");
const dadosClima = document.querySelector("#clima-dados");
const botaoAtualizarClima = document.querySelector("#atualizar-clima");

// Códigos WMO usados pela Open-Meteo, resumidos em descrições em português.
function descreverClima(codigo) {
  if (codigo === 0) return "Céu limpo";
  if ([1, 2].includes(codigo)) return "Predomínio de sol";
  if (codigo === 3) return "Nublado";
  if ([45, 48].includes(codigo)) return "Neblina";
  if ([51, 53, 55, 56, 57].includes(codigo)) return "Garoa";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(codigo)) return "Chuva";
  if ([71, 73, 75, 77, 85, 86].includes(codigo)) return "Neve";
  if ([95, 96, 99].includes(codigo)) return "Trovoadas";
  return "Condição variável";
}

function escolherDica(temperatura, chuva) {
  if (chuva >= 50) return "Dia com possibilidade de chuva: leve capa de chuva. Algumas atividades ao ar livre podem ser alteradas.";
  if (temperatura >= 28) return "Dia quente: use protetor solar e boné e leve uma garrafa de água.";
  if (temperatura <= 16) return "Dia frio: leve um agasalho. Alguns animais gostam de tomar sol nas manhãs frias.";
  return "Tempo firme: pode ser um bom dia para percorrer as trilhas com calma. Use calçados confortáveis.";
}

async function carregarClima() {
  statusClima.hidden = false;
  statusClima.textContent = "Consultando a previsão do tempo...";
  dadosClima.hidden = true;
  botaoAtualizarClima.disabled = true;

  const parametros = new URLSearchParams({
    latitude: "-23.65",
    longitude: "-46.62",
    current: "temperature_2m,weather_code",
    daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    forecast_days: "1",
    timezone: "America/Sao_Paulo"
  });

  try {
    const resposta = await fetch(`https://api.open-meteo.com/v1/forecast?${parametros.toString()}`);
    if (!resposta.ok) {
      throw new Error("A previsão do tempo não está disponível no momento.");
    }

    const dados = await resposta.json();
    const temperatura = dados.current?.temperature_2m;
    const codigo = dados.current?.weather_code;
    const maxima = dados.daily?.temperature_2m_max?.[0];
    const minima = dados.daily?.temperature_2m_min?.[0];
    const chuva = dados.daily?.precipitation_probability_max?.[0];

    if ([temperatura, codigo, maxima, minima, chuva].some((valor) => valor === undefined || valor === null)) {
      throw new Error("A API retornou dados incompletos. Tente novamente mais tarde.");
    }

    document.querySelector("#temperatura-atual").textContent = Math.round(temperatura);
    document.querySelector("#condicao-clima").textContent = descreverClima(codigo);
    document.querySelector("#temperatura-maxima").textContent = `${Math.round(maxima)}°C`;
    document.querySelector("#temperatura-minima").textContent = `${Math.round(minima)}°C`;
    document.querySelector("#chance-chuva").textContent = `${chuva}%`;
    document.querySelector("#dica-clima").textContent = escolherDica(temperatura, chuva);
    document.querySelector("#clima-atualizacao").textContent = `Consulta realizada em ${new Date().toLocaleString("pt-BR")}. Dados: Open-Meteo.`;

    statusClima.hidden = true;
    dadosClima.hidden = false;
  } catch (erro) {
    statusClima.textContent = erro.message;
  } finally {
    botaoAtualizarClima.disabled = false;
  }
}

if (botaoAtualizarClima) {
  botaoAtualizarClima.addEventListener("click", carregarClima);
  carregarClima();
}

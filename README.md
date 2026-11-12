# WebZoo — Projeto Front-End

Projeto acadêmico fictício de educação ambiental, desenvolvido com HTML5, CSS3 e JavaScript puro para a atividade prática de Front-End do SENAI Comendador Santoro Mirone.

## Objetivo

Apresentar informações educativas sobre animais da fauna brasileira, orientar o visitante e demonstrar integrações com APIs públicas.

## Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, Grid e Media Queries)
- JavaScript puro (DOM, Fetch API, async/await)
- ViaCEP para consulta de CEP
- Open-Meteo para informações meteorológicas

## Estrutura

```text
WebZoo_Rafael/
├── index.html
├── animais.html
├── visite.html
├── participe.html
├── css/
│   └── style.css
├── js/
│   ├── menu.js
│   ├── animais.js
│   ├── formulario.js
│   ├── cep.js
│   └── clima.js
└── assets/
    ├── imagens/
    ├── logo/
    └── favicon/
```

## Páginas

- **Início (`index.html`)**: apresentação, missão, valores e curiosidades.
- **Animais (`animais.html`)**: fichas da onça-pintada, tucano-toco e capivara, com filtros por classe, alimentação e bioma.
- **Visite (`visite.html`)**: horários e preços fictícios, endereço, consulta de CEP, previsão do tempo, dicas, regras, acessibilidade e perguntas frequentes.
- **Participe (`participe.html`)**: programas fictícios de educação ambiental, formulário demonstrativo e atitudes de preservação.

## APIs utilizadas

### ViaCEP

- Site: https://viacep.com.br/
- Endpoint: `https://viacep.com.br/ws/{cep}/json/`
- Utilização: `visite.html` e `participe.html`.
- No formulário de participação, os campos de rua, bairro, cidade e estado são preenchidos pela consulta.

### Open-Meteo

- Site: https://open-meteo.com/
- Endpoint base: `https://api.open-meteo.com/v1/forecast`
- Utilização: `visite.html`.
- Coordenadas aproximadas utilizadas: latitude `-23.65`, longitude `-46.62`.
- Campos consultados: temperatura atual, código do tempo, máxima, mínima e probabilidade máxima de precipitação diária.
- Fuso horário: `America/Sao_Paulo`.

As integrações usam `fetch`, `async/await`, `try/catch`, verificação de `response.ok` e mensagens de carregamento/erro.

## Interações

- Menu responsivo com botão hambúrguer, atributos ARIA e fechamento por tecla Esc.
- Filtros combináveis na página Animais.
- Consulta de CEP pelo ViaCEP.
- Consulta do clima pela Open-Meteo.
- Validação do formulário demonstrativo.
- Perguntas frequentes expansíveis com `details` e `summary`.

## Como executar no VS Code

1. Extraia a pasta `WebZoo_Rafael`.
2. Abra o VS Code.
3. Selecione **Arquivo > Abrir Pasta** e escolha `WebZoo_Rafael`.
4. Instale a extensão **Live Server**, caso ainda não esteja instalada.
5. Clique com o botão direito em `index.html`.
6. Escolha **Open with Live Server**.

As APIs dependem de conexão com a internet. Abra o projeto pelo Live Server para evitar limitações de execução local.

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos e pastas do projeto para a raiz do repositório.
3. Abra **Settings > Pages**.
4. Em **Build and deployment**, selecione a publicação a partir de uma branch.
5. Escolha a branch principal e a pasta `/ (root)`.
6. Salve e aguarde a publicação.
7. O GitHub exibirá o endereço do site quando a publicação estiver concluída.

Nenhum endereço de publicação foi criado ou presumido neste projeto.

## Observações

- O WebZoo é fictício e foi desenvolvido para fins didáticos.
- Horários, ingressos, telefone, e-mail e programas são demonstrativos.
- Não informe dados pessoais reais no formulário. Ele não envia nem armazena informações.
- As imagens dos animais e da floresta foram fornecidas nos materiais da atividade e copiadas sem distorção.
- A classificação de conservação e os textos educativos seguem o arquivo de apoio da atividade.

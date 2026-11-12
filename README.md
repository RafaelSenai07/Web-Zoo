# DOCUMENTAÇÃO DO PROJETO WEBZOO

**Desenvolvedor:** Rafael  
**Turma:** [Preencher turma]  
**Instituição:** SENAI Comendador Santoro Mirone

## 1. Link do site publicado

O projeto WebZoo está hospedado gratuitamente por meio do GitHub Pages.

**Endereço:** https://rafaelsenai07.github.io/Web-Zoo/

## 2. Lista de páginas desenvolvidas

O site é composto por quatro páginas principais, que possuem um menu de navegação compartilhado.

| Página | Arquivo | Descrição |
|---|---|---|
| Início | index.html | Apresentação do WebZoo, objetivos do projeto e curiosidades sobre os animais. |
| Animais | animais.html | Apresentação de espécies da fauna brasileira, com informações sobre alimentação, habitat e conservação. |
| Visite | visite.html | Informações sobre horários, ingressos, localização, previsão do tempo e orientações para visitação. |
| Participe | participe.html | Apresentação de programas de educação ambiental e formulário demonstrativo de cadastro. |

## 3. APIs utilizadas

Foram utilizadas duas APIs externas para disponibilizar funcionalidades dinâmicas no site.

### 3.1 ViaCEP

**Endereço consultado:** https://viacep.com.br/ws/{CEP}/json/

**Páginas em que aparece:**
- Visite: permite consultar um CEP e obter informações de endereço.
- Participe: permite buscar o CEP para preencher automaticamente os campos de endereço do formulário.

**Finalidade:** Facilitar a consulta de endereços por meio do Código de Endereçamento Postal (CEP), retornando informações como rua, bairro, cidade e estado.

### 3.2 Open-Meteo

**Endereço consultado:** https://api.open-meteo.com/v1/forecast

**Página em que aparece:**
- Visite: apresenta informações meteorológicas da região do zoológico.

**Finalidade:** Consultar informações meteorológicas, como temperatura atual, temperaturas máxima e mínima e possibilidade de chuva, permitindo que o visitante consulte as condições do tempo antes de planejar o passeio.

A API utiliza parâmetros de localização e previsão para retornar os dados meteorológicos.

## 4. Interações implementadas

O WebZoo possui diferentes interações para facilitar a navegação e melhorar a experiência dos visitantes.

- **Menu de navegação:** permite acessar as quatro páginas do site, com adaptação para dispositivos móveis.
- **Filtros de animais:** permitem filtrar as espécies por classe, alimentação e bioma, além de disponibilizar uma opção para limpar os filtros.
- **Consulta de CEP:** permite pesquisar um endereço utilizando a API ViaCEP.
- **Previsão do tempo:** apresenta informações meteorológicas por meio da API Open-Meteo, com opção para atualizar a consulta.
- **Formulário de participação:** permite preencher informações demonstrativas, selecionar assuntos, escolher um animal favorito e enviar o cadastro.
- **Preenchimento de endereço:** utiliza a consulta de CEP para auxiliar no preenchimento dos campos de endereço.
- **Perguntas frequentes:** apresenta respostas para dúvidas comuns sobre a visitação.
- **Navegação entre páginas:** botões e links direcionam o visitante para diferentes áreas do site.

**Observação:** O formulário é demonstrativo. Os dados não são enviados ou armazenados em um banco de dados.

## 5. Ferramentas de Inteligência Artificial utilizadas

Durante o desenvolvimento do projeto, foram utilizadas ferramentas de inteligência artificial como apoio à construção e organização do site.

- **ChatGPT (OpenAI):** utilizado como apoio na elaboração de instruções, organização da estrutura do projeto, desenvolvimento e revisão de códigos e documentação.
- **Claude (Anthropic):** utilizado como apoio na elaboração e desenvolvimento da estrutura do site por meio de instruções em linguagem natural.
- **Geração de imagens por IA:** utilizada para produzir imagens ilustrativas dos animais e elementos visuais do projeto.

## 6. Considerações finais

O WebZoo foi desenvolvido com o objetivo de apresentar informações sobre a fauna brasileira e incentivar a educação ambiental por meio de uma plataforma digital.

O projeto reúne diferentes páginas, recursos de navegação, filtros de pesquisa, formulários e integração com APIs externas, proporcionando uma experiência interativa e informativa aos visitantes.

A utilização de HTML, CSS e JavaScript, juntamente com serviços externos, permitiu desenvolver um site organizado, responsivo e com funcionalidades que auxiliam o usuário no acesso às informações.

O projeto possui finalidade acadêmica e educativa, sem fins comerciais.
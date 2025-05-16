# Aplicativo de Previsão do Tempo

Um aplicativo web simples e elegante que fornece as condições meteorológicas atuais para qualquer cidade pesquisada, utilizando a OpenWeatherAPI. Inclui um modo escuro e ícones dinâmicos.

## Sobre o Projeto

Este projeto é uma aplicação de previsão do tempo desenvolvida com HTML, CSS e JavaScript. Ele permite que os usuários pesquisem por uma cidade e obtenham informações meteorológicas detalhadas, como temperatura atual, descrição do tempo, mínimas e máximas, umidade, velocidade do vento e visibilidade. O ícone principal do tempo e os favicons da página são atualizados dinamicamente com base nas condições climáticas recebidas.

## Funcionalidades

* Pesquisa de previsão do tempo por nome da cidade.
* Exibição de:
    * Nome da cidade e país.
    * Descrição do tempo (ex: "Predominantemente nublado").
    * Ícone representativo do clima atual.
    * Temperatura atual, máxima e mínima (em Celsius).
    * Percentual de umidade.
    * Velocidade do vento.
    * Visibilidade.
* Atualização dinâmica dos favicons e ícones da aplicação de acordo com o tempo.
* Botão para alternar entre tema claro e escuro.
* Interface responsiva.

## Tecnologias Utilizadas

* **HTML5**: Estrutura da página.
* **CSS3**: Estilização, layout e tema escuro.
* **JavaScript (ES6+)**: Lógica da aplicação, chamadas à API (`Workspace`), manipulação do DOM e alternância de tema.
* **OpenWeatherAPI**: Fornece os dados meteorológicos. (https://openweathermap.org/api)
* **Boxicons**: Para os ícones utilizados na interface. (https://boxicons.com/)

## Como Usar/Testar

1.  **Importante:** Você precisará de uma API Key da [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
2.  Clone este repositório: `git clone https://github.com/Tyxiel/Simple-Weather-App.git`
3.  Navegue até o diretório do projeto.
4.  No arquivo `script.js`, substitua o placeholder `SUA_API_KEY` pela sua chave da OpenWeatherAPI na constante `API_KEY`.
    ```javascript
    const API_KEY = "SUA_API_KEY_AQUI";
    ```
5.  Abra o arquivo `index.html` no seu navegador de preferência.
6.  Digite o nome de uma cidade na barra de pesquisa e clique no ícone de busca.

Ou acesse a demonstração online: [Simple Weather App](https://tyxiel.github.io/Simple-Weather-App/)

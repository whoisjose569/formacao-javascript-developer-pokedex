# Projeto Pokedex - Formação JavaScript Developer (DIO)

Este projeto faz parte do curso de Formação JavaScript Developer da Digital Innovation One (DIO). O objetivo do projeto é desenvolver uma aplicação de Pokédex que consome dados da [PokeAPI](https://pokeapi.co/). A aplicação exibe uma lista de Pokémon, mostrando informações como nome, número e tipos.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura básica da página.
- **CSS**: Para estilizar a página e os elementos da Pokédex.
- **JavaScript**: Para a lógica da aplicação, incluindo consumo de API, manipulação de dados e interação com o DOM.
- **PokeAPI**: API RESTful para obter informações sobre Pokémon.

## Funcionalidades

- **Exibição de Lista de Pokémon**: A Pokédex exibe uma lista de Pokémon, mostrando o nome, tipo, número e imagem.
- **Consumo de API**: A aplicação faz uma requisição para a PokeAPI e obtém os dados dos Pokémon.
- **Manipulação Dinâmica do DOM**: A lista de Pokémon é gerada dinamicamente utilizando JavaScript.

## Estrutura do Projeto

- **index.html**: Arquivo principal da página.
- **global.css**: Estilo global para a página.
- **pokedex.css**: Estilo dos pokemons para a página.
- **main.js**: Lógica JavaScript para consumir a API e manipular os dados.
- **poke-api.js**: Funções para interagir com a PokeAPI.

## Como Executar

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em um navegador.
3. O navegador fará a requisição para a API e exibirá os Pokémon na página.

## Como Funciona

1. **Carregamento de Pokémon**: A página faz uma requisição `fetch` para a PokeAPI e recebe uma lista de Pokémon.
2. **Exibição na Tela**: Utilizando JavaScript, a lista de Pokémon é transformada em elementos HTML e inserida na página.
3. **Interatividade**: A aplicação manipula o DOM para adicionar novos Pokémon dinamicamente conforme os dados são recebidos.

## Exemplo de Código

```javascript
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    const pokemonLi = document.getElementById('pokemonList');
    pokemonLi.innerHTML += pokemonList.map((pokemon) => convertpokemonToLi(pokemon)).join('');
  })
  .catch((error) => console.error(error));
```

## Aprendizados

- **Consumo de APIs com `fetch`**: Aprendi a fazer requisições HTTP e trabalhar com promessas (Promises).
- **Manipulação de Arrays com `map`**: Utilizei o método `map` para iterar e transformar dados de arrays de forma eficiente.
- **Manipulação do DOM com JavaScript**: Criei elementos HTML dinamicamente para exibir a lista de Pokémon.
- **Compreensão do Ciclo de Vida das Promessas**: Trabalhei com o encadeamento de `.then()` e `.catch()` para tratar os resultados da API.


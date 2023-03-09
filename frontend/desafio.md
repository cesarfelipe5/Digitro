- [Desafio Front-end](#desafio-front-end)
  - [Ações que o usuário poderá tomar](#ações-que-o-usuário-poderá-tomar)
  - [Exemplo de interface](#exemplo-de-interface)
    - [Tela de conexão do agente](#tela-de-conexão-do-agente)
    - [Tela de atendimento](#tela-de-atendimento)
    - [Campo duração da chamada](#campo-duração-da-chamada)
  - [Informações técnicas](#informações-técnicas)
  - [Entrega](#entrega)
  - [Avaliação](#avaliação)

# Desafio Front-end

Desenvolver uma interface em **React** que simule uma aplicação simples de conversas de chat.

Esta interface deverá:

- Permitir informar um nome de usuário e a quantidade de chats simultâneos que serão atendidos.
- Exibir a lista de conversas em andamento com a identificação de cada uma delas,
- Exibir os dados da conversa ao clicar sobre uma conversa em andamento.

Mais informações sobre o servidor na seção [Informações técnicas](#informações-técnicas)

## Ações que o usuário poderá tomar

- Poderá conectar e desconectar o usuário.
  - No momento da conexão informará o nome de usuário e o número máximo de chats simultâneos que o servidor poderá enviar para o usuário.
  - Quando estiver desconectado não vai receber chats;
- Poderá alternar entre os chats em andamento;
- Poderá finalizar uma chamada;

:information_source: O termo chamada se refere a um chat em andamento.

## Exemplo de interface

Abaixo tem uma proposta de interface para ilustrar o funcionamento do sistema. Entretanto, não é preciso seguir o design proposto.

**Sinta-se à vontade para montar a interface da maneira que desejar**. :smile:

### Tela de conexão do agente

<img src="images/Exemplo%20de%20tela%20de%20conexao%20do%20agente.png" alt="Tela exemplo" title="Tela exemplo" width="300"/>

### Tela de atendimento
![Tela exemplo](images/Exemplo%20de%20tela%20de%20atendimento.png "Tela exemplo")

### Campo duração da chamada

<img src="images/indicador%20da%20duracao.png" alt="Tela exemplo" title="Tela exemplo" width="300"/>

## Informações técnicas

- A interface se comunicará com o servidor via websocket (socket.io).
- O servidor está hospedado em [http://dev.digitro.com/callcontrol](http://dev.digitro.com/callcontrol)
- [Documentação dos eventos e API](api.md).
- Uma vez o usuário conectado, o servidor começará a enviar eventos de nova chamada para ele até atingir o máximo simultâneo pré-definido na conexão do usuário.
  - O servidor enviará um evento ```USER_CONNECTED``` caso a conexão tenha sido feita com sucesso.
  - Estas chamadas serão enviadas em intervalos de tempo aleatórios entre 0 e 15 segundos. :warning:**Portanto, se na conexão informar o máximo de 1 chamada, fique atento que poderá levar até 15 segundos para o evento com esta chamada ser enviado.**:warning:

## Entrega

- O candidato deverá disponibilizar o link do seu projeto no **GitHub** com a documentação de como configurar e colocar o projeto para rodar.
- Não se preocupe se não conseguir fazer tudo, faça a entrega com o que conseguir fazer. Tudo será levado em consideração. :smile:

## Avaliação

Itens que serão avaliados:

- Organização do projeto;
- Organização do código e lógica de programação;
- Design e componentização da interface;

<h1 align="center">
Code Challenge - Micro-service with NodeJs and Kafka
</h1>

<p align="center">
  <a href="https://github.com/Rocketseat/youtube-challenge-node-kafka/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/rocketseat/youtube-challenge-node-kafka?color=%237159c1&logoColor=%237159c1&style=flat" alt="Contributors">
  </a>
</p>

<hr>

## What can be better?

- Consumer slow to start;
- Add some framework like `Molecular`;
- Kafka may receive a specific responde to a produced message (something like `expectResponse`);

## Dependencies

- [Node.js](https://nodejs.org/en/) >= 8.0.0
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://docs.docker.com/install/)

## Getting started

1. Clone this repository;
2. Move to the appropriate directory;<br />
3. Run `yarn` to install dependencies.<br />
4. Run `yarn start`.

## Sobre o Kafka:
```bash
  O Apache Kafka é uma plataforma para processamento distribuído de eventos. É uma ferramenta muito versátil e você pode adotá-lo na sua empresa mesmo que não seja seu intuito realizar processamento de streams de eventos, já que os casos de uso do kafka são um pouco:
    -- Serviço de mensageria;
    -- Desacoplamento na comunicação entre sistemas;
  Tópicos e mensagens
  No Apache Kafka, toda a interação entre produtores e consumidores é realizada através de tópicos. Tópicos representam fluxos de eventos e desacoplam a comunicação entre sistemas, uma vez que o produtor e o consumidor das mensagens não se conhecem.
  Quando um produtor gera uma mensagem no tópico, os consumidores daquele tópico são notificados com uma cópia da mensagem publicada. Não há limites para a quantidade de consumidores que um tópico pode possuir.
```

## Regra de nogócio
```bash

- Utilizando Node
- Utilizando kafka

## Aplicações

- API principal (station)
- Geração de certificado

## Fluxo

- API principal que envia uma mensagem para o serviço de certificado para gerar o certficado
- Micro-serviço de cetificado devolve uma resposta (síncrona/assíncrona)

Se conseguir síncrona/assíncrona:
  
- receber uma resposta assíncrona de quando o email com o certificado foi enviado

## O que saabemos ?

- Rest (Lâtencia)
- Redis / RabbitMQ /  **kafka**

**kafka**
- Nubank, PayPal, Netflix
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 by Vinicius Prudencio 👋 [See my linkedin](https://www.linkedin.com/in/vinicius-prudencio-64bb99128/)


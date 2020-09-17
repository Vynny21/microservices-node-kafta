# Microservices with Node & kafta

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


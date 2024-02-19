# Desafio Técnico Haytek! 

Bem vindo ao nosso desafio.

## Descrição

Este projeto visa implementar de forma eficiente um backend com uma regra de negócio de frete otimizado e exibir esses dados em um front. 

## Tecnologias

Fique a vontade para usar qualquer tecnologia que preferir, para nós será um diferencial o uso de [Node](https://nodejs.org/en/) e [NestJs](https://nestjs.com/). 

## Requisitos

Criar README do projeto descrevendo as tecnologias utilizadas, chamadas dos serviços e configurações necessário para executar a aplicação.

## Avaliação

Seu projeto será avaliado de acordo com os seguintes critérios.

1. Sua aplicação atende funcionalmente o que foi pedido
2. Você documentou a maneira de configurar o ambiente e rodar sua aplicação na maquina do avaliador
3. Você seguiu as instruções enviadas
4. Voce segue as boas práticas de programação e entrega para o Cliente
5. O código escrito é facil de entender e manter



## API

Segue as apis que serão usadas para o desafio.

### Orders

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Id`      | `string` | **Obrigatório**. O ID do item que você quer |
| `addressId`      | `string` | **Obrigatório**. O ID do item que você quer |
| `carrierId`      | `string` | **Obrigatório**. O ID do item que você quer |
| `createdAt`      | `string` | **Obrigatório**. O ID do item que você quer |

### Address

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/adresses
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Id`      | `string` | **Obrigatório**. O ID do item que você quer |
| `state`      | `string` | **Obrigatório**. O ID do item que você quer |
| `zipcode`      | `string` | **Obrigatório**. O ID do item que você quer |
| `street`      | `string` | **Obrigatório**. O ID do item que você quer |
| `complement`      | `string` | **Obrigatório**. O ID do item que você quer |
| `neighborhood`      | `string` | **Obrigatório**. O ID do item que você quer |
| `city`      | `string` | **Obrigatório**. O ID do item que você quer |

### Carriers

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/carriers
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Id`      | `string` | **Obrigatório**. O ID do item que você quer |
| `name`      | `string` | **Obrigatório**. O ID do item que você quer |
| `cutOffTime`      | `string` | **Obrigatório**. O ID do item que você quer |

### Boxes

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/boxes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `type`      | `string` | **Obrigatório**. O ID do item que você quer |
| `size`      | `string` | **Obrigatório**. O ID do item que você quer |


### Instruções de entrega do desafio

1.

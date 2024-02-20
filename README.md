# Desafio Técnico Haytek! 

Bem vindo ao desafio técnico da Haytek. Este teste é composto de duas partes, uma de Backend e a outra de Frontend.

## Descrição

A Haytek é uma empresa que vende lentes oftálmicas para óticas de todo o Brasil. Nossos clientes costumam realizar diversos pedidos por dia em nosso e-commerce. 

Como forma de otimizar o custo logístico de nossos clientes, queremos desenvolver uma funcionalidade que identifique todos os pedidos que são enviados num mesmo dia para um mesmo endereço de entrega e os agrupe no menor número possível de caixas.

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

## Desafio

### Parte 1: Backend

A parte 1 do desafio consiste em criar uma rota de API que agrupe os diversos pedidos em caixas, respeitando as seguintes regras:

- Pedidos enviados dentro de uma mesma data para um mesmo endereço devem ser agrupados em entregas.
- Uma mesma entrega pode conter mais de uma caixa.
- Os pedidos só podem ser agrupados, se forem enviados pela mesma transportadora
- Cada transportadora tem um horário de corte. Pedidos realizados antes do horário de corte, são enviados no mesmo dia. Pedidos realizados após o horário de corte, são enviados no dia seguinte.
- As entregas devem ser agrupados no menor numero de caixas possível. Além disso, deve-se procurar usar sempre a menor caixa disponível. Para efeito de clareza, a soma da quantidade máxima de itens das caixas de uma mesma entrega deve ser a menor possível.
- Para efeito de simplificação, todos os produtos desse teste terão o mesmo volume. Sendo assim, nos endpoints que você irá usar informamos apenas a quantidade de itens de cada pedido e o número máximo de itens que cabem em cada tipo de caixa que temos disponíveis.
- O mesmo pedido pode ser quebrado em mais de uma caixa, se preciso.

A rota que você irá desenvolver deverá retornar as seguintes informações:

- Entregas:
  - Data de Envio
  - Transportadora
  - Endereço Completo(Cidade, Bairro, Rua, Complemento, Cep )
  - Caixas:
    - Tipo
    - Qtd de Itens na caixa
    - Cod. dos Pedidos contidos na caixa ( o mesmo pedido pode aparecer em mais de uma caixa)

### Parte 2: Frontend

1. Criar uma página web que consulte o endpoint de API que você acabou de criar e renderizar a lista de entregas na tela.
2. Não iremos avaliar a qualidade do layout, somente as informações que serão impressas na tela

## API

Segue as apis que serão usadas para o desafio.

### Orders

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Id`      | `string` | Identificador único do pedido |
| `addressId`      | `string` | Endereço usado no pedido |
| `carrierId`      | `string` | Transportadora usada no pedido |
| `createdAt`      | `string` | Data de criação do pedido |
| `quantity`      | `number` | O numero de produtos do pedido |

### Address

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/adresses
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Id`      | `string` | Identificador único do endereço |
| `state`      | `string` | Estado |
| `zipcode`      | `string` | CEP |
| `street`      | `string` | Rua |
| `complement`      | `string` | Complemento |
| `neighborhood`      | `string` | Bairro |
| `city`      | `string` | Cidade |

### Carriers

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/carriers
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Id`      | `string` | Identificador único da transportadora |
| `name`      | `string` | O nome da transportadora |
| `cutOffTime`      | `string` | O horário de corte da transportadora |

### Boxes

```http
  https://stg-api.haytek.com.br/api/v1/test-haytek-api/boxes
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `type`      | `string` | O tipo daquela caixa |
| `maxQuantity`      | `string` | A quantidade máxima de produtos que a caixa comporta |

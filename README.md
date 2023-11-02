
# Smilify - Sistema de Votação para Pesquisa de Satisfação do Cliente

Este projeto consiste em um sistema de votação para avaliar o atendimento aos clientes. Ele permite aos usuários escolher uma das cinco opções disponíveis e registrar seu voto.

## Tecnologias Utilizadas

- Node.js
- Express
- TypeORM
- PostgreSQL
- Docker

## Funcionalidades

1. **Registro de Voto**: O sistema possui uma rota `/voto` que permite o registro do voto do cliente, escolhendo uma das cinco opções de satisfação.

## Configuração e Instalação

Para executar o projeto localmente, siga estas etapas:

### Pré-requisitos

- Node.js e npm instalados
- Docker instalado

### Passos

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Instale as dependências usando o comando `npm install`.
4. Certifique-se de ter o PostgreSQL configurado no Docker.
5. Execute o comando para iniciar o servidor: `npm start`.
6. Acesse o sistema através do navegador ou de um aplicativo cliente.

## Estrutura do Projeto

- `/src`: Contém o código-fonte da aplicação.
- `/src/routes`: Onde estão definidas as rotas da aplicação.
- `/src/models`: Contém os modelos de dados utilizados pelo TypeORM.
- `/src/controllers`: Lógica de controle das rotas.
- `/src/database`: Configuração do banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para criar um fork deste repositório e propor melhorias.

---

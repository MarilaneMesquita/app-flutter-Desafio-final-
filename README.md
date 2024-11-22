# Desenvolvimento do Servidor Node.js para Integração com Aplicação Flutter

Este projeto consiste em um servidor simples em Node.js desenvolvido para fornecer funcionalidades CRUD (Create, Read, Update, Delete) para entidades de Clientes e Produtos, destinado à integração com uma aplicação Flutter.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Scripts NPM](#scripts-npm)
- [Execução do Projeto](#execução-do-projeto)
- [Populando o Banco de Dados](#populando-o-banco-de-dados)
- [Endpoints Disponíveis](#endpoints-disponíveis)
  - [Clientes](#clientes)
  - [Produtos](#produtos)
- [Validações de Dados](#validações-de-dados)
- [Observações](#observações)

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 12 ou superior)
- **NPM** (geralmente instalado junto com o Node.js)
- **MySQL** (para o banco de dados)
- **Git** (opcional, para clonar o repositório)

## Instalação

1. **Clone o repositório (caso não tenha o arquivo .zip):**

   ```bash
   git clone https://github.com/MarilaneMesquita/app-flutter-Desafio-final-.git
   

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

## Configuração do Banco de Dados

1. **Crie um banco de dados MySQL:**

   Crie um banco de dados no MySQL que será usado pelo projeto. Por exemplo, você pode criar um banco de dados chamado `meubanco`.

2. **Configuração das Variáveis de Ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as seguintes configurações:

   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=meubanco
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_DIALECT=mysql
   ```

   > **Nota:** Substitua `meubanco`, `seu_usuario` e `sua_senha` pelas informações do seu banco de dados.

3. **Certifique-se de que o arquivo `.env` está listado no `.gitignore` para evitar o commit de informações sensíveis.**

## Estrutura do Projeto

A estrutura de pastas e arquivos do projeto é a seguinte:

```
servidor-node-flutter/
├── app.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
├── seed.js
├── config/
│   └── database.js
├── controllers/
│   ├── clienteController.js
│   └── produtoController.js
├── models/
│   ├── cliente.js
│   └── produto.js
├── routes/
│   ├── clientes.js
│   └── produtos.js
└── README.md
```

### Descrição dos Arquivos e Pastas

- **app.js**: Arquivo principal da aplicação que inicializa o servidor Express e define as rotas principais.
- **package.json**: Contém as dependências e scripts do projeto.
- **seed.js**: Script para popular o banco de dados com dados iniciais.
- **config/**: Pasta que contém as configurações do banco de dados.
  - **database.js**: Configuração da conexão com o banco de dados usando Sequelize.
- **controllers/**: Contém os controladores que definem a lógica de negócio para cada entidade.
  - **clienteController.js**: Controlador para as operações relacionadas aos clientes.
  - **produtoController.js**: Controlador para as operações relacionadas aos produtos.
- **models/**: Contém os modelos (definições das entidades) usando Sequelize.
  - **cliente.js**: Modelo da entidade Cliente.
  - **produto.js**: Modelo da entidade Produto.
- **routes/**: Define as rotas da aplicação.
  - **clientes.js**: Rotas para as operações de clientes.
  - **produtos.js**: Rotas para as operações de produtos.
- **README.md**: Este arquivo que você está lendo.

## Scripts NPM

No arquivo `package.json`, estão definidos os seguintes scripts:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "seed": "node seed.js"
}
```

- **start**: Inicia o servidor em modo de produção.
- **dev**: Inicia o servidor em modo de desenvolvimento, utilizando o `nodemon` para recarregar automaticamente em caso de mudanças no código.
- **seed**: Executa o script `seed.js` para popular o banco de dados com dados iniciais.

## Execução do Projeto

### 1. Iniciar o Servidor

Para iniciar o servidor, execute:

- Em modo de desenvolvimento:

  ```bash
  npm run dev
  ```

- Em modo de produção:

  ```bash
  npm start
  ```

O servidor estará rodando em `http://localhost:3000`.

### 2. Testar a Conexão com o Banco de Dados

Ao iniciar o servidor, você deverá ver no console:

```
Conexão com o banco de dados estabelecida com sucesso.
Servidor rodando na porta 3000
```

Se ocorrer algum erro, verifique as configurações do banco de dados e as dependências instaladas.

## Populando o Banco de Dados

Para inserir dados iniciais no banco de dados, execute:

```bash
npm run seed
```

Este script irá:

- Sincronizar os modelos com o banco de dados, recriando as tabelas se necessário.
- Inserir dados de exemplo para clientes e produtos.
- Fechar a conexão com o banco de dados.

**Atenção:** O script `seed.js` usa `sequelize.sync({ force: true })`, o que significa que todas as tabelas serão recriadas e os dados existentes serão perdidos. Use este script com cautela e apenas em ambientes de desenvolvimento.

## Endpoints Disponíveis

A API disponibiliza os seguintes endpoints para operações CRUD com Clientes e Produtos.

### Clientes

- **GET /clientes**

  Retorna a lista de todos os clientes.

- **GET /clientes/:id**

  Retorna os detalhes de um cliente específico.

- **POST /clientes**

  Adiciona um novo cliente.

  **Exemplo de corpo da requisição:**

  ```json
  {
    "nome": "Gabriel",
    "sobrenome": "Costa",
    "email": "gabriel.costa@example.com",
    "idade": 31,
    "foto": "https://randomuser.me/api/portraits/men/11.jpg"
  }
  ```

- **PUT /clientes/:id**

  Atualiza as informações de um cliente existente.

  **Exemplo de corpo da requisição:**

  ```json
  {
    "nome": "Gabriel",
    "sobrenome": "Souza",
    "email": "gabriel.souza@example.com",
    "idade": 32,
    "foto": "https://randomuser.me/api/portraits/men/12.jpg"
  }
  ```

- **DELETE /clientes/:id**

  Remove um cliente.

### Produtos

- **GET /produtos**

  Retorna a lista de todos os produtos.

- **GET /produtos/:id**

  Retorna os detalhes de um produto específico.

- **POST /produtos**

  Adiciona um novo produto.

  **Exemplo de corpo da requisição:**

  ```json
  {
    "nome": "Grampeador",
    "descricao": "Grampeador de mesa médio",
    "preco": 18.00
  }
  ```

- **PUT /produtos/:id**

  Atualiza as informações de um produto existente.

  **Exemplo de corpo da requisição:**

  ```json
  {
    "nome": "Grampeador",
    "descricao": "Grampeador de mesa grande",
    "preco": 20.00
  }
  ```

- **DELETE /produtos/:id**

  Remove um produto.

## Validações de Dados

As validações estão implementadas nos modelos usando o Sequelize e garantem a integridade e consistência dos dados.

### Clientes

- **Nome e Sobrenome**

  - Campos obrigatórios.
  - Deve conter entre 3 e 25 caracteres.

- **Email**

  - Campo obrigatório.
  - Deve ser um email válido.
  - Deve ser único no banco de dados.

- **Idade**

  - Campo obrigatório.
  - Deve ser um número positivo.
  - Deve ser menor que 120.

- **Foto**

  - Campo opcional.
  - Se fornecido, deve ser uma URL válida.

### Produtos

- **Nome e Descrição**

  - Campos obrigatórios.
  - Deve conter entre 3 e 25 caracteres.

- **Preço**

  - Campo obrigatório.
  - Deve ser um número positivo.

- **Data de Atualização**

  - Definido automaticamente com a data e hora atuais.

## Observações

- **CORS**

  O middleware CORS está habilitado para permitir que a aplicação Flutter possa se comunicar com este servidor sem problemas de bloqueio de origem cruzada.

- **Tratamento de Erros**

  Os erros são tratados e retornados com mensagens claras e códigos de status HTTP apropriados.

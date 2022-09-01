<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jcleston/core-api-adonisjs2">
  <a href="https://github.com/jcleston/core-api-adonisjs2/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jcleston/core-api-adonisjs2">
  </a>
   <a href="https://github.com/jcleston/core-api-adonisjs2/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jcleston/core-api-adonisjs2?style=social">
  </a>
  <a href="https://www.linkedin.com/in/janescleston/">
    <img alt="Feito por Janes Cleston" src="https://img.shields.io/badge/feito%20por-Janes%20Cleston-%237519C1">
  </a>
</p>

## Menu Geral
<!--ts-->
* [Instalação](#instalação)
  * [Comandos](#comandos)
* [Desenvolvimento](#desenvolvimento)
  * [Model](#model)
  * [Migration](#migration)
  * [Controller](#controller)
  * [Rotas](#rotas)
* [MER](#mer)


<!--te-->
<br /><br />

## Instalação
Atualizando o nodejs

```shell
$ sudo npm install -g n
$ sudo n latest
$ sudo n stable
```

Instalando o adonisjs

```shell
$ npm init adonis-ts-app@latest api-adonisjs
```

Iniciando o server
```shell
$ node ace serve --watch
```

Instalando e configurando o lucid
```shell
$ npm i @adonisjs/lucid
$ node ace configure @adonisjs/lucid
```
Editar o arquivo cors.ts
```shell
enabled: (request) => request.url().startsWith('/api'),
```

Editar o arquivo routes.ts
```shell
Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })
}).prefix('/api')
```

## Comandos
```shell
Para ver todas as opções
$ node ace

Para ver as rotas disponiveis
$ node ace list:routes
```

<br /><br />

## Desenvolvimento
Iremos utilizar os conceitos de Model, Migrations, Controller e Rotas

## Model
Para criar um model
```shell
$ node ace make:model Teste -m
```

## Migration
Para rodar a migration
```shell
$ node ace migration:run
```

## Controller
Para criar um controller
```shell
$ node ace make:controller Teste
```

## Rotas
Exemplo de configuração de rota
```shell
Route.resource('/testes', 'TesteController').apiOnly()
```
## Mer
Modelo de Entidade e Relacionamento utilizado no projeto

<p>
  <img src="https://raw.githubusercontent.com/jcleston/core-api-adonisjs2/main/tmp/uploads/many-to-many.webp" width="450" title="hover text" alt="accessibility text">
</p>

# Full-Stack Application Documentation
## Guia de Inicialização do Projeto

Este projeto utiliza uma aplicação React no frontend, um servidor NestJS no backend, e um banco de dados simulado com JSON-Server. Siga as instruções abaixo para configurar e executar o sistema.

## Estrutura do Projeto

- **Frontend (React)**: Porta `3002`
- **Backend (NestJS)**: Porta `3001`
- **Banco de Dados (JSON-Server)**: Porta `3000`

---

# Configuração do Frontend

Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

### Scripts Disponíveis

No diretório do projeto React, você pode executar:

#### `yarn start`

Inicia o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3002](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer alterações no código.\
Você também verá erros de lint no console.

#### `yarn test`

Inicia o executor de testes no modo interativo de observação.\
Consulte a seção sobre [testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

#### `yarn build`

Constrói o aplicativo para produção na pasta `build`.\
Agrupa o React em modo de produção e otimiza a compilação para o melhor desempenho.

O build é minimizado e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

#### `yarn eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando copiará todos os arquivos de configuração e dependências transitivas (Webpack, Babel, ESLint, etc.) diretamente para o seu projeto, dando total controle sobre eles.

---

# Configuração do Backend

O backend utiliza o framework [NestJS](https://nestjs.com) para construir uma API eficiente e escalável.

### Instalação

```bash
$ yarn install
```

### Executando o Servidor

```bash
# Modo de desenvolvimento
$ yarn run start

# Modo de observação
$ yarn run start:dev

# Modo de produção
$ yarn run start:prod
```

### Testes

```bash
# Testes unitários
$ yarn run test

# Testes end-to-end
$ yarn run test:e2e

# Cobertura de testes
$ yarn run test:cov
```
O servidor estará disponível em [http://localhost:3001](http://localhost:3001).

Para mais informações sobre implantação, consulte a [documentação de deployment do NestJS](https://docs.nestjs.com/deployment).

---

## Configuração do Banco de Dados

Este projeto utiliza o [JSON-Server](https://github.com/typicode/json-server) como banco de dados simulado.

### Configuração

1. Certifique-se de que o arquivo `db.json` contém os dados necessários para sua aplicação.
2. No diretório do banco de dados, execute:

```bash
$ yarn json
```

O servidor estará disponível em [http://localhost:3002](http://localhost:3002).

---

## Fluxo de Execução Completo

1. Inicie o banco de dados no backend JSON-Server:

```bash
$ yarn json
```

2. Inicie o backend NestJS:

```bash
$ yarn run start:dev
```

3. Inicie o frontend React:

```bash
$ yarn start
```

Agora você pode acessar:

- Frontend: [http://localhost:3002](http://localhost:3000)
- Backend: [http://localhost:2001](http://localhost:3001)
- Banco de Dados: [http://localhost:3000](http://localhost:3002)

---

## Recursos Úteis

- Documentação React: [React Documentation](https://reactjs.org/)
- Documentação NestJS: [NestJS Documentation](https://docs.nestjs.com/)
- Documentação JSON-Server: [JSON-Server Documentation](https://github.com/typicode/json-server)

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.

# Made With 🥔 By Luis.H

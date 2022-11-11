const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;
const schema = require('../data/schema');

const PORT = 3333;

const app = express();
app.use(express.json());

// This is the pretty dark-mode GraphQL IDE
app.get('/gql', expressPlayground({ endpoint: '/graphql' }));

// app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: false,
  }),
);

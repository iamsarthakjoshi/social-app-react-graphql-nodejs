import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

app.get('/ping', (_, res) => {
  res.send('pong!');
});

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.applyMiddleware({ app });

app.listen({ port: 5000 }, () =>
  console.log('Now browse to http://localhost:5000' + apolloServer.graphqlPath)
);

const path = require('path');
const isDev = think.env === 'development';
const graphql = require('../apollo');
const { makeExecutableSchema } = require('graphql-tools');
const Schema = require('../graphql/schema');
const Resolvers = require('../graphql/resolvers');
const Connectors = require('../graphql/connectors');

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    match: '/graphql',
    handle: graphql,
    options: {
      schema: makeExecutableSchema({
        typeDefs: Schema,
        resolvers: Resolvers
      }),
      context: {
        db: Connectors
      }
    }
  },
  {
    handle: 'router',
    options: {}
  },
  'logic',
  'controller'
];

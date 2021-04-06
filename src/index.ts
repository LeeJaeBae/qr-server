import { Options } from 'graphql-yoga';
import ConnectionOptions from './ormConfig';
import { createConnection } from 'typeorm';
import app from './app';

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStat = () => console.log(`Listening on port ${PORT}`);

createConnection(ConnectionOptions).then(_ => {
  app.start(appOptions, handleAppStat);
}).catch(e => console.log(e));
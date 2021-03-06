import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan'
import helmet from 'helmet'
import schema from './schema';

class App{
  public app:GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({schema})
    this.middlewares();
  }

  private middlewares = ():void=>{
    this.app.express.use(cors());
    this.app.express.use(logger('dev'))
    this.app.express.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }))
  }
}

export default new App().app;
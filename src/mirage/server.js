import { createServer, RestSerializer } from 'miragejs';
import inventoryItemModel from './models/inventoryItem';
import inventoryItemFactory from './factories/inventoryItem';
import routes from './routes';
import seeds from './seeds';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    serializers: {
      application: RestSerializer,
    },

    models: {
      inventoryItem: inventoryItemModel,
    },

    factories: {
      inventoryItem: inventoryItemFactory,
    },

    routes,

    seeds,
  });

  return server;
}
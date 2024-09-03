// src/mirage/index.js
import { createServer, Factory, Model } from "miragejs";
import userRoutes from "./routes/userRoute";
import userFactory from "./factories/userFactory";
import userModel from "./models/userModel";
import userSeeds from "./seeds/userSeeds";
import userManageFactory from "./factories/userManageFactory";
import userCardFactory from "./factories/userCardFactory";
import inventoryItemModel from "./models/inventoryItemModel";
import inventoryItemFactory from "./factories/inventoryItemFactory";
import inventorySeeds from "./seeds/inventorySeeds";
import inventoryRoutes from "./routes/inventoryRoutes";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    models: {
      user: userModel,
      manageCard: userModel,
      userListCard: userModel,
      inventoryItem: inventoryItemModel,

    },
    factories: {
      user: userFactory,
      manageCard: userManageFactory,
      userListCard: userCardFactory,
      inventoryItem: inventoryItemFactory,

    },
    seeds(server) {
        userSeeds(server);
        inventorySeeds(server);
    },

    routes() {
      this.namespace = "api";
      userRoutes.call(this);
      inventoryRoutes.call(this);
    },
  });
}

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
import certFactory from "./factories/certFactory";
import certificatesModel from "./models/certificatesModel";
import certificateSeeds from "./seeds/certificateSeeds";
import certificateRoutes from "./routes/certificatesRoute";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    models: {
      user: userModel,
      manageCard: userModel,
      userListCard: userModel,
      inventoryItem: inventoryItemModel,
      cert: certificatesModel

    },
    factories: {
      user: userFactory,
      manageCard: userManageFactory,
      userListCard: userCardFactory,
      inventoryItem: inventoryItemFactory,
      cert: certFactory

    },
    seeds(server) {
      userSeeds(server);
      inventorySeeds(server);
      certificateSeeds(server)
    },

    routes() {
      this.namespace = "api";
      userRoutes.call(this);
      inventoryRoutes.call(this);
      certificateRoutes.call(this)
    },
  });
}

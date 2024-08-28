// src/mirage/index.js
import { createServer, Factory, Model } from "miragejs";
import userRoutes from "./routes/userRoute";
import userFactory from "./factories/userFactory";
import userModel from "./models/userModel";
import userSeeds from "./seeds/userSeeds";
import userManageFactory from "./factories/userManageFactory";
import userCardFactory from "./factories/userCardFactory";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,
    models: {
      user: userModel,
      manageCard: userModel,
      userListCard: userModel
    },
    factories: {
      user: userFactory,
      manageCard: userManageFactory,
      userListCard: userCardFactory
    },

    seeds(server) {
        userSeeds(server);
    },

    routes() {
      this.namespace = "api";
      userRoutes.call(this);
    },
  });
}

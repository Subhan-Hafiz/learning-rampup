export default function userRoutes() {
    this.get("/users", (schema) => {
      return schema.users.all();
    });
    this.get("/manage-cards", (schema) => {
      return schema.manageCards.all();
    });
    this.get("/user-list-cards", (schema) => {
      return schema.userListCards.all();
    });
  }
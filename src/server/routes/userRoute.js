export default function userRoutes() {
  this.get("/users", (schema) => {
    return schema.users.all();
  });
  this.get("/manage-cards", (schema) => {
    return schema.manageCards.all();
  });

  this.patch("/users/:id", (schema, request) => {
    let newAttrs = JSON.parse(request.requestBody)
    let id = request.params.id
    let user = schema.users.find(id)

    return user.update(newAttrs)
  });
  this.delete("/users/:id", (schema, request) => {
    let id = request.params.id

    return schema.users.find(id).destroy()
  })
  this.get("/user-list-cards", (schema) => {
    return schema.userListCards.all();
  });


}
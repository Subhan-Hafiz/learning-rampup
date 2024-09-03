export default function certificateRoutes() {
    this.get("/certificates", (schema) => {
        return schema.certs.all();
    });

    this.patch("/certificates/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody)
        let id = request.params.id
        let certificate = schema.certificates.find(id)

        return certificate.update(newAttrs)
    });
    this.delete("/certificates/:id", (schema, request) => {
        let id = request.params.id

        return schema.certs.find(id).destroy()
    })
}
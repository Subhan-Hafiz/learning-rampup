export default function routes() {
    this.namespace = 'api';

    this.get('/inventory-items', (schema, request) => {
        let { query } = request.queryParams;

        let allItems = schema.inventoryItems.all().models;

        if (query) {
            query = query.toLowerCase();
            allItems = allItems.filter(item =>
                item.name.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.quantity.toString().includes(query)
            );
        }

        return allItems;
    });

    this.delete('/inventory-items/:id', (schema, request) => {
        let id = request.params.id;
        return schema.inventoryItems.find(id).destroy();
    });

}
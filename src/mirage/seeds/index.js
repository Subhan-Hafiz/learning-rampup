export default function seeds(server) {
    // Create 10 items with dynamic data
    server.createList('inventoryItem', 10);

    // Create static data items
    server.create('inventoryItem', {
        name: 'Static Product Name 1',
        category: 'Static Category 1',
        quantity: 42
    });
}
export default function inventorySeeds(server) {
    server.createList('inventoryItem', 10); // Creates 10 random items using the factory
}
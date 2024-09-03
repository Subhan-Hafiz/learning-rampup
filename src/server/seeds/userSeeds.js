export default function userSeeds(server) {
    server.createList("user", 10); // Create 10 reminders
    server.createList("manageCard", 4); // Create 4 cards
    server.createList("userListCard", 4); // Create 4 cards
  }
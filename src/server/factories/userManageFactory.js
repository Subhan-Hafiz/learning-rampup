import { Factory } from "miragejs";

export default Factory.extend({
  icon(i) {
    const icons = ["Capacity", "Plan", "UserAdd", "UserAdmin"];
    return icons[i % icons.length];
  },
  cardHeader(i) {
    const headers = [
      "Manage certificates",
      "Manage devices",
      "Manage users",
      "Manage roles",
    ];
    return headers[i % headers.length];
  },
  cardBody(i) {
    const bodies = [
      "Add certificate or create certificate",
      "Export CSV from Greenlake Cloud platform workspace",
      "Send a signup link to users to collaborate with team",
      "Assign a custom role or built-in roles to your team",
    ];
    return bodies[i % bodies.length];
  },
});

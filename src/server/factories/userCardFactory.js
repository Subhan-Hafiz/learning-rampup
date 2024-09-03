import { Factory } from "miragejs";

export default Factory.extend({
    icon(i) {
        const icons = ["Plan", "UserAdmin", "UserAdd", "Capacity"];
        return icons[i % icons.length]
    },
    cardHeader(i) {
        const headers = ['Total users', 'Active users', 'Inactive users', 'Unverified users'];
        return headers[i % headers.length]
    },
    cardBody(i) {
        const body = ['532', '255', '267', '98'];
        return body[i % body.length]
    },
    status(i) {
        const headers = ['active', 'inActive', 'unVerified'];
        return headers[i % headers.length]
    }

})
import { Factory } from "miragejs";
import { faker } from '@faker-js/faker';

export default Factory.extend({
    name() {
        return faker.person.fullName()
    },
    email() {
        return faker.internet.email()
    },
    status(i) {
        const status = ['active', 'inActive', 'unVerified']
        return status[i % status.length]
    },
    role() {
        return 'User'
    },
    lastLogin() {
        return faker.date.anytime()
    },
});
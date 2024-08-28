import { Factory } from "miragejs";
import { faker } from '@faker-js/faker';

export default Factory.extend({
    initials() {
        return faker.person.prefix()
    },
    name() {
        return faker.person.fullName()
    },
    email() {
        return faker.internet.email()

    },
    status() {
        return 'Unvarified'

    },
    role() {
        return 'User'
    },
    lastLogin() {
        return faker.date.anytime()
    },
});
// {
//     id: 'asdf13435',
//     initials: 'PS',
//     name: 'Palma Stoltenberg',
//     email: 'Candido.Senger@yahoo.com',
//     status: 'UNVERIFIED',
//     role: 'Admin, Activate TAC Admin',
//     lastLogin: 'Dec 8, 2023, 02:11:05',
//   },


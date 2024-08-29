import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
    name() {
        return faker.commerce.productName();
    },
    category() {
        return faker.commerce.department();
    },
    quantity() {
        return faker.datatype.number({ min: 1, max: 100 });
    },
});
// export default defineEventHandler(async (event) => {
//     return {
//         data: {
//             message: "Hello World"
//         }
//     }
// });

import {faker} from '@faker-js/faker';

export default defineEventHandler(async (event) => {
    //return for me a list of product data with 10 items using faker
    return Array.from({length: 10}, () => {
        return {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.urlPlaceholder()
        }
    })

});
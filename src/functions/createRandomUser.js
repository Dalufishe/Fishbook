
import { faker } from "@faker-js/faker/locale/zh_TW";

export const createRandomUser = (number) => {
    const randomUser = [];
    for (let i = 0; i < number; i++) {
        randomUser.push(
            {
                _id: faker.datatype.uuid(),
                avatar: faker.image.avatar(),
                name: faker.name.lastName() + faker.name.firstName(),
            }
        )
    }
    return randomUser
};
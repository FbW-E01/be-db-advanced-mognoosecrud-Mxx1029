import faker from 'faker';
import { connect } from './connection.js';
import { disconnect } from './connection.js';
import User from './user.js';

connect();

for (let i = 4; --i; ) {
    await User.create({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(12)
    })
}

disconnect();
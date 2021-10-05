import { connect } from './connection.js';
import { disconnect } from './connection.js';
import User from './user.js';

connect();

const toBeUpdated = { name: "Natasha69" };
const update = { name: "RainbowCucumber299" };
const options = {
    new: true,
    runValidators: true
}
const updatedUser = await User.findOneAndUpdate(toBeUpdated, update, options)
console.log(updatedUser);

disconnect();
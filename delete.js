import { connect } from './connection.js';
import { disconnect } from './connection.js';
import User from './user.js';

connect();

const toDelete = { name: "Janae11" };
const options = {
    new: true,
    runValidators: true
}
const deletedUser = await User.findOneAndDelete(toDelete, options);
console.log(deletedUser);

disconnect();
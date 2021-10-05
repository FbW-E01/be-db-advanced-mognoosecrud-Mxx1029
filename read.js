import { connect } from './connection.js';
import { disconnect } from './connection.js';
import User from './user.js';

connect();

const allUsers = await User.find({});
console.log(allUsers);

disconnect();
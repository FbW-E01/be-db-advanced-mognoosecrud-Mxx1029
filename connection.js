import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// $ mongo
// > use mongooseCrudExercise
// > db.createUser({ user: "jocelyn", pwd: "passw0rd", roles: ["readWrite"]} )



const { DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;
const db = 'mongooseCrudExercise';

const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${db}`;

mongoose.connection.on('error', (err) => console.log(">> Error ", err) || process.exit(0));
mongoose.connection.on('connecting', () => console.log(">> Connecting"))
mongoose.connection.on('connected', () => console.log(">> Connected"))
mongoose.connection.on('disconnecting', () => console.log(">> Disconnecting"))
mongoose.connection.on('disconnected', () => console.log(">> Disconnected"))

export async function connect() {
    await mongoose.connect(connectionString);
}

export async function disconnect() {
    await mongoose.disconnect();
}

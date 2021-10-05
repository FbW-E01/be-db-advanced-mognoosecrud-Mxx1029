import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 8
    },
    role: {
        type: String,
        enum: ["User", "Admin", "Editor"],
        default: "User"
    }
});

const User = mongoose.model("users", userSchema);

export default User;
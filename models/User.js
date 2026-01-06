import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, unique: true, index: true },
    username: { type: String, },
    name: { type: String, },
    image: { type: String, },
    signUp: {
        name: { type: String, },
        email: { type: String, unique: true, index: true },
        password: { type: String, },
    },
    createdAt: { type: Date, default: Date.now, },
    updatedAt: { type: Date, default: Date.now, }
}, { timestamps: true });

export default mongoose.models.User || model('User', UserSchema);
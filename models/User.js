import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, unique: true, index: true },
    username: { type: String, },
    name: { type: String, },
    image: { type: String, },
    signUp: {
        name: { type: String, },
        email: { type: String, unique: true },
        password: { type: String, },
    },
    role: { type: String, default: 'user' },
    phone: { type: Number, },
    address: { type: String, },
    captain: {
        isVerified: { type: Boolean, default: false },
        licenceNumber: { type: String, },
        vehicle: {
            type: String,
            model: String,
            plateNumber: String,
        },
        rating: { type: Number, default: 0 },
        totalRides: { type: Number, default: 0 }
    },
    createdAt: { type: Date, default: Date.now, },
    updatedAt: { type: Date, default: Date.now, }
}, { timestamps: true });

export default mongoose.models.User || model('User', UserSchema);
import crypto from "crypto";
import argon2 from "argon2";

export function generateOtp() {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
}

export function generateOtpId() {
    const otpId = crypto.randomBytes(16).toString("hex");
    return otpId;
}

export async function hashedPassword(password) {
    const hashedPassword = await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
        parallelism: 1,
    });
    return hashedPassword;
}

export async function verifyPassword(storedPasswordHash, password) {
    const passwordMatch = await argon2.verify(storedPasswordHash, password);
    if (passwordMatch) {
        return true;
    }

    return false;
}
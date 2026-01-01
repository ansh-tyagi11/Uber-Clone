"use server";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { otpEmail } from "@/lib/otpEmail";
import { generateOtp, hashedPassword, generateOtpId, verifyPassword } from "@/utils/generateOtp";
import otpStore from "@/models/otpStore";
import { sendEmail } from "@/lib/mailer";

export const createUser = async (data) => {

    await connectDB();

    let name = data.username;
    let email = data.email;
    let confirmPassword = data.confirmPassword;

    let existingUser = await User.findOne({ email });

    if (existingUser) return { error: "User already exists. Please login instead." };

    const otp = generateOtp();
    const password = await hashedPassword(confirmPassword);
    const otpId = generateOtpId();

    const alreadyOtp = await otpStore.findOne({ email })
    if (alreadyOtp) {
        let otpId = alreadyOtp.otpId;
        alreadyOtp.otp = otp;
        await alreadyOtp.save();

        await otpEmail(email, name, otp);

        return { success: true, email, otpId }
    }

    await otpStore.create({
        otpId,
        email,
        name,
        password,
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await otpEmail(email, name, otp);

    return { success: true, email, otpId }
}

export default async function verifyOtpId(email, otpId) {
    await connectDB();

    let findEmail = await otpStore.findOne({ email, otpId });
    if (findEmail) return { success: true }

    return { success: false, message: "Session not found." }
}

export const verifyOtp = async (email, otp) => {
    await connectDB();

    let otpRecord = await otpStore.findOne({ email, otp })

    if (!otpRecord) return { error: "Invalid OTP" };

    if (otpRecord.expiresAt < Date.now()) return { error: "OTP expired." };

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        await User.create({
            email: otpRecord.email,
            name: otpRecord.name,
            signUp: {
                password: otpRecord.password,
                name: otpRecord.name,
                email: otpRecord.email
            },
        });

        await otpStore.deleteMany({ email });
        return { success: true, message: "OTP verified successfully! Your account is now active." }
    }

    await otpStore.deleteMany({ email });
    return { success: true, message: "Login successfull." }
}

export async function login(data) {
    await connectDB();

    let email = data.email;
    let password = data.password;

    let existingUser = await User.findOne({ email });

    if (!existingUser) return { success: false, message: "User not found. Please sign up first." }

    let storedPasswordHash = existingUser.signUp?.password;
    let userName = existingUser.signUp?.name || existingUser.name;

    if (!storedPasswordHash) return { success: false, error: "User has no password. Please use social login or reset password." };

    let userPasswordVerify = await verifyPassword(storedPasswordHash, password)
    if (!userPasswordVerify) return { success: false, error: "Incorrect password." };

    let otp = generateOtp();
    let otpId = generateOtpId();

    await otpStore.create({
        otpId,
        email,
        name: userName,
        password: storedPasswordHash,
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmail(email, userName, otp);

    return { success: true, email, otpId }
}

export async function resendSignupOtp(email) {
    await connectDB();
    let alreadyOtp = await otpStore.find({ email });
    if (!alreadyOtp) return { error: "No session found" };

    let newOtp = generateOtp();
    alreadyOtp.otp = newOtp;
    await alreadyOtp.save();

    await sendEmail(email, alreadyOtp.name, otp);

    return true;
}
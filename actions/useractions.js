"use server";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { otpEmail } from "@/lib/otpEmail";
import { generateOtp, hashedPassword, generateOtpId } from "@/utils/generateOtp";
import otpStore from "@/models/otpStore";
import { redirect } from "next/dist/server/api-utils";

export const createUser = async (data) => {

    await connectDB();

    let name = data.username;
    let email = data.email;
    let confirmPassword = data.confirmPassword;

    let existingUser = await User.findOne({ email: "email" });

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
    console.log(email);
    console.log(otpId)
    let findEmail = await otpStore.findOne({ email, otpId });
    if (findEmail) return { success: true, message: "Session Found." }

    return { success: true, message: "Session not found.",redirect:"/signup" }
}
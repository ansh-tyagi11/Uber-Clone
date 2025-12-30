"use server";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { otpEmail } from "@/lib/otpEmail";
import { generateOtp, hashedPassword } from "@/utils/generateOtp";

export const createUser = async (data) => {

    await connectDB();

    let username = data.username;
    let email = data.email;
    let confirmPassword = data.confirmPassword;

    let existingUser = await User.findOne({ email: "email" });

    if (existingUser) return { error: "User already exists. Please login instead." };

    const otp = generateOtp()

    console.log(otp)
    console.log(username)
    console.log(email)
    console.log(confirmPassword)
    return;
}
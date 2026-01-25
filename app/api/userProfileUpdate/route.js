import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { verifyPassword, hashedPassword } from "@/utils/generateOtp";

export async function POST(req) {
    const { email, data } = await req.json();
    await connectDB();

    const { tel, currentPassword, newPassword } = data;

    let user = await User.findOne({ email });
    if (!user) return new Response(JSON.stringify({ success: false, message: "User not found." }));

    await User.updateOne(
        { email },
        { $set: { phone: tel } }
    )

    if (newPassword) {
        let storedPasswordHash = user.signUp?.password;

        if (!storedPasswordHash) return new Response(JSON.stringify({ success: false, error: "User has no password. Please use social login or reset password." }));

        let isCurrentPasswordValid = await verifyPassword(storedPasswordHash, currentPassword);

        if (!isCurrentPasswordValid) return new Response(JSON.stringify({ success: false, error: "Incorrect current password." }));

        const newHashedPassword = await hashedPassword(newPassword);

        await User.updateOne(
            { email },
            { $set: { "signUp.password": newHashedPassword } }
        )
    }

    return new Response(JSON.stringify({ success: true, message: "Profile updated successfully." }));
}
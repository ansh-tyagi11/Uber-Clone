import nodemailer from "nodemailer";

export async function sendEmailContact(name, userEmail, subject, message) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${userEmail}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: subject,
        html: message,
        replyTo: userEmail,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}
import { sendEmail } from "./mailer";

export async function otpEmail(email, name, otp) {

    const html = `<div style ="max-width: 600px; margin: 20px auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 10px; color: #333; box-sizing: border-box;" >
  <h2 style="color: #0070f3; text-align: center; font-size: clamp(20px, 5vw, 28px); margin: 0 0 20px;">RideApp OTP Verification</h2>
  <p style="font-size: clamp(14px, 3vw, 16px); line-height: 1.6; margin: 0 0 10px;">Hi <strong>${name}!</strong>,</p>
  <p style="font-size: clamp(14px, 3vw, 16px); line-height: 1.6; margin: 0 0 10px;">Thank you for verifying your account/request with RideApp.</p>
  <p style="font-size: clamp(14px, 3vw, 16px); line-height: 1.6; margin: 0 0 20px;">To complete your <strong>registration</strong>, please use the following One-Time Password (OTP) code:</p>
  <div style="text-align: center; margin: 20px 0;">
    <span style="display: inline-block; padding: 15px 20px; font-size: clamp(20px, 6vw, 24px); font-weight: bold; background-color: #0070f3; color: #fff; border-radius: 8px; letter-spacing: 4px; word-break: break-all;">
    ${otp}
    </span>
  </div>
  <p style="font-size: clamp(14px, 3vw, 16px); line-height: 1.6; margin: 0 0 10px;">This code is valid for <strong>5 minutes</strong>. Please do not share this code with anyone for your security.</p>
  <p style="font-size: clamp(14px, 3vw, 16px); line-height: 1.6; margin: 0 0 20px;">If you did not initiate this request, please disregard this email.</p>
  <h4 style="margin: 20px 0 10px; color: #555; font-size: clamp(16px, 4vw, 18px);">Important Security Note:</h4>
  <p style="font-size: clamp(12px, 3vw, 14px); color: #555; line-height: 1.6; margin: 0 0 8px;">
    Never share your OTP with anyone. RideApp personnel will never ask you for this code.
  </p>
  <p style="font-size: clamp(12px, 3vw, 14px); color: #555; line-height: 1.6; margin: 0 0 20px;">
    If the OTP expires, you will need to request a new one on the RideApp website.
  </p>
  <p style="font-size: clamp(14px, 3vw, 16px); line-height: 1.6; margin: 0 0 10px;">Thank you for using RideApp!</p>
  <p style="font-size: clamp(14px, 3vw, 16px); line-height: 1.6; margin: 0;">Best regards,<br>
  <strong>The RideApp Team</strong><br>
  </div>`;

    await sendEmail(email, "Your Ride App verification Code (OTP)", html)
}
import { sendEmailSetup } from "./sendEmail.js";
import { hashPassword } from "../hashpassword.js";
import { generateOTP } from "./otp-generation.js";
import { poolWithDB } from "../../db/database.js";



export const sendOTP = async ({
    email,
    subject,
    message,
    duration = 1,
}) => {
    try {
        if (!email || !subject || !message || !duration) {
            throw new Error("Please fill all the credentials");
        }
        
        await poolWithDB.query('DELETE FROM otp WHERE email = ?', [email]);
        const generatedOTP = await generateOTP();

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject,
            html: `<p>${message}</p><p style="color: green; font-size:25px; letter-spacing: 2px;"><b>${generatedOTP}</b></p> <p>This code <b>expires in ${duration} hours</b>.</p>`
        }

        await sendEmailSetup(mailOptions);
        
        // Insert OTP into the database
        const expiresAt = new Date(Date.now() + 3600000 * duration);
        await poolWithDB.query('INSERT INTO otp (email, otp, createdAT, expiresAT) VALUES (?, ?, NOW(), ?)', [email, generatedOTP, expiresAt]);
        
        // Return a success message
        return { success: true, message: "OTP sent and saved successfully" };
    } catch (error) {
        // Handle error
        console.error(error);
        throw error; // Rethrow the error to propagate it
    }
}


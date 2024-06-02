import nodemailer from 'nodemailer';
import env from 'dotenv';

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    auth: {
        user : process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
    }
})

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to email server');
        console.log(success);
    }
});

export const sendEmailSetup = async (mailOptions) => {
    try{
        if(!mailOptions.to) {
            throw new Error('No recipients defined');
        }
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error('Error sending email:', err);
        throw new Error(`An error occurred while sending email ${err.message}`);
    }
    
}
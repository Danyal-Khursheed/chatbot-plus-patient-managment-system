import { pool, poolWithDB } from "../db/database.js";
import Joi from "joi";
import { sendOTP } from "../utils/otp/otpController.js";


export const verifyEmail = async (req, res, next) => {
    try {
        const { email } = req.body;

        const schema = Joi.object({
            email: Joi.string().email().required(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(401).json({
                success: false,
                message: "Please fill all the credentials",
                error: error.details[0].message
            });
        }

        poolWithDB.query('SELECT * FROM admin WHERE email = ?', [email], (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error occurred in database query",
                    error: error.message
                });
            }

            if (results.length === 0) {
                return res.status(401).json({
                    success: false,
                    message: "No account found with this email",
                });
            } else {
                const user = results[0];
                if (user.email === email) {
                    return res.status(200).json({
                        success: true,
                        message: "Email has been verified",
                       
                    });
                }
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred in verifying email",
            error: error.message,
        });
    }
};

export const OTP =  async (req, res) => {
    try {
        const { email } = req.body;
        const subject = "OTP Verification";
        const message ="Your OTP code is:";

        // Check if all required fields are present
        if (!email ) {
            throw new Error("Please fill all the credentials");
        }

        // Call the sendOTP function with the provided data
        const result = await sendOTP({ email, subject, message, duration : 1 });

        // Send success response
        res.status(200).json({ success: true, message: "OTP sent successfully", data: result });
    } catch (error) {
        // Send error response
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
};

export const verifyOTP = async (req, res ,{email, password}) => {
    try {
        const { email, otp } = req.body;
        if ( !otp) {
            return res.status(401).json({
                success: false,
                message: 'Please fill all the credentials',
            });
        }

        // Query the database to check if the email exists
        poolWithDB.query('SELECT * FROM otp WHERE email = ?', [email], (error, results) => {
            if (error) {
                return res.status(404).json({
                    success: false,
                    message: 'An error occurred in the query',
                    error: error.message
                });
            } else {
                if (results.length === 0) {
                    return res.status(200).json({
                        success: false,
                        message: 'No record found for the provided email',
                    });
                } else {
                    const expire = new Date(results[0].expiresAT).getTime(); // Convert expiresAT to milliseconds
                    if (expire < Date.now()) {
                        return res.status(200).json({
                            success: false,
                            message: 'OTP has expired, please regenerate it',
                        });
                    }
                    // If email exists and OTP is not expired, proceed to verify OTP
                    const foundOTP = results[0].otp;

                    if (foundOTP === otp) {
                        return res.status(200).json({
                            success: true,
                            message: 'OTP verified successfully',
                        });
                    } else {
                        return res.status(200).json({
                            success: false,
                            message: 'Invalid OTP',
                        });
                    }
                }
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in OTP verification',
            error: error.message
        });
    }
}


import { poolWithDB } from "../db/database.js";
import { createError } from "../utils/createError.js";
import Joi from 'joi';
import bcrypt from 'bcrypt';
import { hashPassword } from "../utils/hashpassword.js";
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(4).required(),
        });

        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(401).json({
                success: false,
                message: "Please fill all the credentials",
            });
        }

        // Check for existing email (await the query)
        await poolWithDB.query('SELECT * FROM admin WHERE email = ?', [email], async (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "An error occurred while querying the database"
                });
            }

            if (result.length > 0) {
                return res.status(401).json({
                    success: false,
                    message: "Email already exists",
                });
            }

            const hashedPassword = await hashPassword(password);

        // Insert the user (await the query)
        poolWithDB.query('INSERT INTO admin (email, password) VALUES (?, ?)', [email, hashedPassword]);

        res.status(200).json({
            success: true,
            message: "Sign Up successfully",
        });
    });
        // Hash the password before inserting (assuming `hashPassword` is defined)
        
    } catch (err) {
        return next(createError(500, 'An error occurred in sign up: ' + err.message));
    }
};


export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(4).required()
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(401).json({
                success: false,
                message: "Please fill all the credentials",
            });
        }

        await poolWithDB.query('SELECT * FROM admin WHERE email = ?', [email], async (error, result) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "An error occurred while querying the database"
                });
            }

            if (result.length === 0) {
                return res.status(401).json({
                    success: false,
                    message: "No account found with this email address",
                });
            }

            const user = result[0];
            const match = await bcrypt.compare(password, user.password);
            console.log(password ===user.password);
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
            if (password === user.password) {
                return res.status(200).json({
                    success: true,
                    message: "Login successful",
                    user,
                    token
                });

            } else {
                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password",
                });
            }
        });
    } catch (error) {
        return next(createError(500, 'An error occurred in login: ' + error));
    }
};


export const resetPassword = (req, res) => {
    try {
        const {email, otp, resetPassword} = req.body;

        if (!email || !otp || !resetPassword) {
            return res.status(401).json({
                success: false,
                message: 'Please fill all the credentials',
            });
        }

        const emailCheck = poolWithDB.query('SELECT * from otp WHERE email = ?',[email],async(error, results)=>{
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
                }
                const foundOTP = results[0].otp;

                    if (foundOTP === otp) {
                        const updatePassword = poolWithDB.query('UPDATE admin SET password = ? WHERE email = ?',[resetPassword,email], (error,results) => {
                            if(error) {
                                return res.status(200).json({
                                    success: false,
                                    message: 'Error occuried while updating password',
                                });

                            }
                            else{
                                return res.status(200).json({
                                    success: true,
                                    message: 'Password reset successfully',
                                });
                            }
                        });
                        
                    } else {
                        return res.status(200).json({
                            success: false,
                            message: 'Invalid OTP',
                        });
                    }
            }   
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occuried while reseting password",
            error: error.message,
        });
    }
}


export const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: 'Successfully logout'
        })
        
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failded to Logout",
        });
    }
}




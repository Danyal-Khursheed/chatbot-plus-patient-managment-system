import  jwt  from "jsonwebtoken";

export const verifyToken = (req, res,next) =>{

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from 'Bearer <token>' format

    if (!token) {
        return res.status(401).json({
            success: false, message: "No token provided"
        });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY ,(err,decode)=>{
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }

        req.user = decode; // Attach decoded user information to request object
        next();
    })
}

export const generateOTP = () =>{
try{   
    return Math.floor(10000 * Math.random(9999));
}
catch (error) {
    throw new Error('An error occurred while generating OTP', error);
}
}
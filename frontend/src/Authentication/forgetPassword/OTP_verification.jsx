import React, { useState, useEffect } from 'react'
import '../Login/login.css'
import {useDispatch, useSelector } from 'react-redux'
import instance from '../../axios/axiosInstance'
import {useNavigate } from 'react-router-dom';
import { email_verification,OTP_state } from '../../Redux/slices/userAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OTP_verification = () => {
  const dispatch = useDispatch();
  const [email, setEmail]= useState();
  const [otp, setOTP] = useState();
  const navigate = useNavigate();
  const email_ = useSelector(state => state.auth.auth.email);
  
  const handleSubmit = async () => {
    
    const data = {
      email,
      otp:Number(otp)
    };
    try {
      const response = await instance.post('/otp-verification', data);
      // console.log('Response from server:', response.data);
      if (response.data.success) {
        toast.success('OTP verified successfully');
        navigate('/forget-password/reset-password')
        dispatch(OTP_state(otp));        // Navigate or perform any other action upon successful OTP verification
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // console.error('Error verifying OTP:', error);
      toast.error(error.response.data.message)
    }
  };
      

    useEffect(() => {
      console.log('email', email_);
      setEmail(email_);
    }, [email_]); 
  return (
    <>
    <div className="login-page d-flex align-items-center">
        <div className="container">
      <h3 className="heading">Enter OTP</h3>
      <div className="form">
        {/* OTP input field */}
        

        <input
          placeholder="Enter your OTP"
          type="text"
          className="input-field mt-3"
          value={otp}
          onChange={(e)=>setOTP(e.target.value)}
        />
        {/* Submit button */}
        <button className="button mt-3" onClick={handleSubmit}>
          Verify OTP
        </button>
      </div>
    </div>
    <ToastContainer />
    </div>
    </>
  )
}

export default OTP_verification
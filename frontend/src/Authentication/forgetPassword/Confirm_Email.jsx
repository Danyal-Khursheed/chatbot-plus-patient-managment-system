import React, { useState, useEffect } from 'react'
import '../Login/login.css'
import instance from '../../axios/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { email_verification } from '../../Redux/slices/userAuth';
import {useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Confirm_Email = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [error, setError] = useState('')
  const email_ = useSelector(state=> state.auth);
 
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const data = {
      email
    };

    try {
      
      const response = await instance.post('/email-verification', data);
      toast.success(response.data.message);
      // Dispatch action after successful API call
      dispatch(email_verification(email));
      try{
        const response2 = await instance.post('/otp-sending',data);
        // console.log(response2.data.message);
      }
      catch (error) {
        // setError(error.response.data.message);
        
      }
      console.log('handle submit is hitted');
      navigate('/forget-password/otp-verification');
    }  catch (error) {
      toast.error(error.response.data.message);
      
    }
  };


  useEffect(() => {
    console.log('email', email_);
  }, [email_]); 
  return (
    <>
    <div className="login-page d-flex align-items-center">
        <div className="container">
      <h3 className="heading">Confirm Email</h3>
      <div className="form">
        
        <input
          placeholder="Enter your Email"
          type="email"
          className="input-field mt-3"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        
        {/* Login button */}
        <button className="button mt-3" onClick={handleSubmit}>
        Confirm
        </button>
      </div>
    </div>
    <ToastContainer />
    </div>
    </>
  )
}

export default Confirm_Email
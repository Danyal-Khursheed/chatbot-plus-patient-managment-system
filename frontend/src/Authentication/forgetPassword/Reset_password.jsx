import React, { useState, useEffect } from 'react';
import '../Login/login.css';
import { useSelector } from 'react-redux';
import instance from '../../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reset_password = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const email_ = useSelector(state => state.auth);

  const email__ = useSelector(state => state.auth.auth.email);
  const otp__ = useSelector(state => state.auth.auth.otp);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const data = {
        email: email__,
        otp: Number(otp__),
        resetPassword: password
      };

      try {
        const response = await instance.post('/reset-password', data);
        if (response.data.success) {
          toast.success('Password reset successfully');
          navigate('/login');
          // Redirect or perform any other action upon successful password reset
          // navigate('/');
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error('Password and Confirm password do not match');
    }
  };

  useEffect(() => {
    console.log('email', email_);
    // setEmail(email_); // No need to set email state in this component
  }, [email_]);

  return (
    <>
    <div className="login-page d-flex align-items-center">
      <div className="container">
        <h3 className="heading">Enter Your new Password</h3>
        <div className="form">
          {/* Password field */}
          <input
            placeholder="Enter your new Password"
            type="password"
            className="input-field mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm password field */}
          <input
            placeholder="Confirm your new Password"
            type="password"
            className="input-field mt-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Confirm button */}
          <button className="button mt-3" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>
      <ToastContainer />
      </div>
    </>
  );
};

export default Reset_password;

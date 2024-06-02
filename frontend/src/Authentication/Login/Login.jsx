// Login.jsx
import axios from 'axios';

import React, { useState } from 'react';
import './login.css';
import instance from '../../axios/axiosInstance';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Cookies from 'js-cookie';
// import { Cookies } from 'js-cookie';
import { useDispatch } from 'react-redux';
import { token_ } from '../../Redux/slices/userAuth';




const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
 


  const handleSubmit = async (e) => {
    e?.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await instance.post('/admin-login', data);
      const token = response.data.token; // Extract token from response
      console.log(token);
      toast.success('Login successfully');
      // Cookies.set('token', token); // Store token in cookies
      dispatch(token_(token));
      
    } catch (err) {
      // toast.error(err.response.data.message);
    }
  };
  

  return (
    <div className="login-page d-flex align-items-center">
    <div className="container align-items-center">
      <h3 className="heading">Doctor Login</h3>
      <div className="form">
        {/* Login field */}
        <input
          placeholder="Enter your email"
          type="email"
          className="input-field mt-3"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          
        />
        {/* Password field */}
        <input
          placeholder="Enter your password"
          type="password"
          className="input-field mt-3"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {/* Remember me checkbox */}
        <div className="checkbox-container">
          <input
            id="remember-me"
            type="checkbox"
            className="checkbox mt-3"
          />
          <label htmlFor="remember-me" className="label mt-3">Remember me</label>
          <Link className="mt-3 forget" to="/forget-password/email-verification">Forget Password</Link>

        </div>
        {/* Login button */}
        <button className="button mt-3" onClick={handleSubmit}>
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './spinner.css';

const Spinner = () => {
  const [countDown, setCountDown] = useState(3);
  const navigate = useNavigate();

  // Redirect to login page when countdown reaches 0
  useEffect(() => {
    if (countDown === 0) {
      navigate('/login');
    }
  }, [countDown, navigate]);

  // Decrement countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prevCount) => prevCount - 1);
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="spinner-div h-100 d-flex flex-column">
      <div className="spinner-3 d-flex flex-column"></div>
      <br />
      <h2 className="spinner-heading">Redirecting to Login in {countDown} seconds</h2>
    </div>
  );
};

export default Spinner;

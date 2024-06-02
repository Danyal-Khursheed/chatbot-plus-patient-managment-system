import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importing useSelector
import Spinner from './Spinner';

const AdminProtected = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [countDown, setCountDown] = useState(3);
  const navigate = useNavigate();

  // Using useSelector to get token from Redux store
  const token = useSelector((state) => state.auth.auth.token); // Accessing nested state
  // console.log(token);

  useEffect(() => {
    const getTokenFromCookie = async () => {
      try {
        // const token = await Cookies.get('token'); // Assuming awaitable
        setIsAuthenticated(!!token); // Update state based on token presence
      } catch (error) {
        console.error('Error retrieving token from cookie:', error);
      }
    };

    getTokenFromCookie();
  }, [token]); // Adding token to the dependency array

  return (
    isAuthenticated ? (
     <Outlet/>// Render the outlet if authenticated
    ) : (
      <Spinner/>
    )
  );
};

export default AdminProtected;

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');

  // Initialize socket once
  useEffect(() => {
    const s = io('http://localhost:6001');
    setSocket(s);
    return () => s.disconnect();
  }, []);

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:6001/login', {
        email: email.toLowerCase(),
        password
      });
      const user = res.data;
      localStorage.setItem('userId', user._id);
      localStorage.setItem('usertype', user.usertype);
      localStorage.setItem('username', user.username);
      localStorage.setItem('email', user.email);
      navigate(`/${user.usertype}`);
    } catch (err) {
      console.error("Login failed:", err.response?.data?.msg || err.message);
      alert(err.response?.data?.msg || "Login failed!");
    }
  };

  const register = async () => {
    try {
      const res = await axios.post('http://localhost:6001/register', {
        username,
        email: email.toLowerCase(),
        password,
        usertype
      });
      const user = res.data;
      localStorage.setItem('userId', user._id);
      localStorage.setItem('usertype', user.usertype);
      localStorage.setItem('username', user.username);
      localStorage.setItem('email', user.email);
      navigate(`/${user.usertype}`);
    } catch (err) {
      console.error("Register failed:", err.response?.data?.msg || err.message);
      alert(err.response?.data?.msg || "Registration failed!");
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <GeneralContext.Provider
      value={{
        socket,
        username, setUsername,
        email, setEmail,
        password, setPassword,
        usertype, setUsertype,
        login, register, logout
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;

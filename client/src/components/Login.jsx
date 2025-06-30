import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const Login = ({ setAuthType }) => {
  const { email, password, setEmail, setPassword, login } = useContext(GeneralContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleSubmit} className="authForm">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
      <p>
        Not registered?{' '}
        <span onClick={() => setAuthType('register')}>Register</span>
      </p>
    </form>
  );
};

export default Login;

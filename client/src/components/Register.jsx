import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';

const Register = ({ setAuthType }) => {
  const { setUsername, setEmail, setPassword, setUsertype, register } = useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    await register();
  };

  return (
    <form className="authForm" onSubmit={handleRegister}>
      <h2>Register</h2>

      <div className="form-floating mb-3 authFormInputs">
        <input
          type="text"
          className="form-control"
          id="floatingUsername"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="floatingUsername">Username</label>
      </div>

      <div className="form-floating mb-3 authFormInputs">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating mb-3 authFormInputs">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="form-floating mb-3 authFormInputs">
        <select
          className="form-select"
          id="floatingUsertype"
          onChange={(e) => setUsertype(e.target.value)}
          required
        >
          <option value="">Select user type</option>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select>
        <label htmlFor="floatingUsertype">User Type</label>
      </div>

      <button type="submit" className="btn btn-primary">Register</button>

      <p>Already have an account? <span onClick={() => setAuthType('login')}>Login</span></p>
    </form>
  );
};

export default Register;

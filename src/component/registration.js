import React, { useState } from 'react';

import './registration.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    if (!email.includes('@') || !email.includes('.com')) {
      alert("Invalid email format");
      return false;
    }

    // Store the registration data in localStorage
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));

    alert("Registration successful! Now go to the login page.");
    // Redirect to the login page
    navigate('/login')

    return true;
  };

  return (
    <fieldset>
      <div className='Register'>
        <h2>Register</h2><br/><br/>
        <form id="registerform">
          <input
            type="text"
            id="registerUsername"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br/><br/>
          <input
            type="password"
            id="registerPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br/><br/>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />  <br/><br/>
          <input
            type="email"
            id="registerEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br/><br/>
          <button type="button" onClick={handleRegister}>Register</button><br/>
          <a href=''>Already have a account <Link to='/login'>Login</Link></a>

        </form>
      </div>
    </fieldset>
  );
};

export default RegistrationForm;

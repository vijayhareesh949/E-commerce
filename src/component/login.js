import React, { useState } from 'react';
import './login.css'
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve the registration data from localStorage
    const regUsername = localStorage.getItem("username");
    const regPassword = localStorage.getItem("password");
    
    const parsedUsername = JSON.parse(regUsername);
    const parsedPassword = JSON.parse(regPassword);

    // Check if the entered credentials match the registration data
    if (username === parsedUsername && password === parsedPassword) {
      alert("Login successful!");
      navigate('/')
    } else {
      alert("Invalid username or password. Please try again.");

    }
  };

  return (
    <fieldset>
      <div>
        <h2>Login</h2><br />
        <form id="loginform">
          <input
            type="text"
            id="loginUsername"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br /><br />
          <input
            type="password"
            id="loginPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br /><br />
          <button type="button" onClick={handleLogin}>Login</button><br/>
          <a>I'dont have a account ?<Link to='/register'>Register here</Link></a>
        </form>
      </div>
    </fieldset>
  );
};

export default Login;

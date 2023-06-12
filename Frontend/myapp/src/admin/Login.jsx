import React from 'react';
import './login.css';
import {useNavigate} from "react-router-dom";
const Login = () => {
  const Navigate=useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'pass') {
      Navigate("/Homeadmin");
    } else {
      alert('Invalid username or password.');
    }
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
    }
  };

  return (
    <div className="login-container">
      <h1 className='font-bold text-2xl text-up tracking-wider px-15'>Admin Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username" className="block text-gray-600 text-sm  text-left font-bold" >Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />

        <label htmlFor="password" className= "block text-gray-600 text-sm  text-left font-bold">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />
        <button type="submit" id="login-button" className="rounded bg-blue-800 text-white px-6 py-2 font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

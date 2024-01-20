import React, { useState } from 'react';
import apiService from '../../api/apiService';
import './Registration.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleRegistration = async () => {
    try {
      const response = await apiService.post('/user/register', { name, email, password, role });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Registration failed', error);
    }
  
  };

  return (
    <><div>
    
    </div>
   
    <body className="full-background">
    <h2 className="font-a">Please Register Your Acount</h2>
    <div className='registration-container'>
      <h2 className='registration-header'>Register</h2>
      <label className='registration-label'>Name:</label>
      <input className='registration-input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label className='registration-label'>Email:</label>
      <input className='registration-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label className='registration-label'>Password:</label>
      <input className='registration-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label className='registration-label'>Role:</label>
      <select className='registration-select' value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <Link to='./login'>
        <button className='registration-button' onClick={handleRegistration}>Register</button>
      </Link>
    </div>
    </body>
    </>
  );
};

export default RegistrationForm;

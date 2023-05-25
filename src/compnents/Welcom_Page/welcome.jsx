import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './welcome.css'

export let isVariableTrue = false;
export let signedInUserId = '';

export default function Welcome() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [variable, setVariable] = useState(isVariableTrue)

  useEffect(() => {
    const storedUsersData = localStorage.getItem('usersData');
    if (storedUsersData) {
      setUsers(JSON.parse(storedUsersData));
    } else {
      fetchUsersData();
    }
  }, []);

  const fetchUsersData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users/');
      const jsonUsersData = await response.json();
      setUsers(jsonUsersData);
      localStorage.setItem('usersData', JSON.stringify(jsonUsersData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigate = useNavigate(); 

  const handleSignIn = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log('User signed in successfully');
      navigate('./browse')
      signedInUserId = user.id;
      setVariable(true)
      isVariableTrue = true;
    } else {
      setError('Invalid email or password');
      setEmail('');
      setPassword('');
    }
  };

  console.log("response", variable)

  return (
    <>
      <div className="ParrenSignIn">
        <p className="welcome">Welcome</p>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            className="UserName"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            className="Password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {error && <p>{error}</p>}
          <br />
          <input className="signIn" onClick={handleSignIn} type="submit" value="Sign In" />
        </form>
        <br />
        <br />
        <a href="./">
          <Link to="/forgotPassword" className="Fpassword">
            Forgot Password?
          </Link>
        </a>
        <br />
        <Link to="/signUp" className="CaNaccount">
          Create a new account
        </Link>
      </div>
      <div className="GreenLabel">
      <p className='meoradebi'>MEORA<br />DEBI</p>
      </div>
    </>
  );
}
import React, { useState } from 'react';
import "./Login.scss"
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

function login(){
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const res = await newRequest.post("https://onlyskills-server.onrender.com/api/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError("Something went wrong!");
      }
    }
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="test"
          placeholder="jhondoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error.message}
      </form>
    </div>
  )
}

export default login
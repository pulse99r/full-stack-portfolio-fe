
import  React, { useState, useEffect } from 'react';
import "./css/UserLogin.css";

function UserLogin() {
const [ loggedInUser, setloggedInUser ] = useState("")
const handleLogin = (e) =>{

}
  return (
    <form onSubmit={handleLogin()}>
      <label>Email:
        <input type="email" name="email" />
      </label>
      <label>Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
}

export default UserLogin;


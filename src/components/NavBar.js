import "./css/NavBar.css";
// import Userlogin from "./UserLogin";
import { Link } from "react-router-dom";
import About from "./About"

function Nav() {
  const handleLogin = ()=>{
    
  }
  return (
    <div className="navbar">
      <Link to='/home' className="link">Home</Link>
      <Link to='/about' className="link">About</Link>
      <Link to='/friends' className="link">Friends</Link>
      <Link to='/messages' className="link">Messages</Link>
      <Link to='/login' className="link" onclick={handleLogin}>Login</Link>
      <Link to='/logout' className="link">Logout</Link>
    </div>
  );
}

export default Nav;
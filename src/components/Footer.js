import "./css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer font-smaller">
        <Link to='/home' className="link">Home</Link>
        <Link to='/about' className="link">About</Link>
        <Link to='/friends' className="link">Friends</Link>
        <Link to='/messages' className="link">Messages</Link>
        <Link to='/login' className="link">Login</Link>
        <Link to='/logout' className="link">Logout</Link>
      </div>
      <span className="font-smaller"><span >&copy; R.Johnson 2023 </span>&bull; All Rights Reserverd</span>
    </div>
  );
}

export default Footer;
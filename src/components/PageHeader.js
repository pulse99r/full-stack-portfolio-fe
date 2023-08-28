import logo from './smoke-signals2.png';
import './css/PageHeader.css';
import Nav from "./NavBar";

import UserLogin from "./UserLogin"

function Home() {
  return (
    <div className="page-header">
      <header className="app-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img"/>
        </div>
        <div className="header-container">
          <span className='header'>
            <h1 className='header1'>Smoke Signals</h1>
            <h2 className='header2'>Messaging App</h2>
          </span>
          <div className='navbar'>
            <Nav />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
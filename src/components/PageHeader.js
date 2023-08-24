import logo from './smoke-signals2.png';
import './css/PageHeader.css';
import Nav from "./NavBar";

import UserLogin from "./UserLogin"

function Home() {
  return (
    <div className="page-header">
      <header className="app-header">
       <img src={logo} alt="Logo" className="logo"/>
       <div>
        <h1 className='header1'>Smoke Signals</h1>
        <h2 className='header1'>Messaging App</h2>
       </div>
      </header>
      <Nav />
    </div>
  );
}

export default Home;

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import Home from './components/Home';
import About from './components/About';
import UserList from './components/UserList';
import Messages from './components/Messages.js';
// import UserLogin from './components/UserLogin';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <main>
          <PageHeader />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<UserList />} />
           {/* <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} /> */}
          </Routes>
          <Footer/>
        </main>
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import PageHeader from './components/PageHeader';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <main>
          <PageHeader />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
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

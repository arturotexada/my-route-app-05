import {
        HashRouter,
        Routes,
        Route
      } from 'react-router-dom';
      
import Home from './components/Home';
import About from './components/About';
import Telephone from './components/Telephone';
import './App.css';

function App1() {
  return (
    <div className="App">
      
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/telephone" element={<Telephone />} />



          
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App1;

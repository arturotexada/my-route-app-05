import {
        BrowserRouter,
        Routes,
        Route
      } from 'react-router-dom';
      
import Home from './components/Home';
import About from './components/About';
import Telephone from './components/Telephone';
import './App.css';

function App0() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/telephone" element={<Telephone />} />



          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App0;

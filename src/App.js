import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/menu/Home'
import About from './components/menu/About';
import Contact from './components/menu/Contact'
import Skills from './components/menu/Skills'

const App = () =>{
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

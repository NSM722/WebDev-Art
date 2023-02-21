import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

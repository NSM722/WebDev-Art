import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';
import Navbar from './Navbar';
import Contact from './Contact';



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

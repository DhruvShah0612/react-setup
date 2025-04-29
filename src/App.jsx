import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Education from './Pages/Education/Education';
import Experience from './Pages/Experience/Experience';
import Contact from './Pages/Contact/Contact';
import Hire_Me from './Pages/Hire-Me/Hire_Me';
import Error from './Components/Error-Page/Error';

function App() {

  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/skills' element={<Skills />} />

        <Route path='/projects' element={<Projects />} />

        <Route path='/education' element={<Education />} />

        <Route path='/experience' element={<Experience />} />

        <Route path='/hire-me' element={<Hire_Me />} />

        <Route path="*" element={<Error />} />

      </Routes>

      <Footer title="Takshil's" />

    </Router>
  )
}

export default App

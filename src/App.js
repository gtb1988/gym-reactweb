
import './App.css';
import Header from './component/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './component/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;

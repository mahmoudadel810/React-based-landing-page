import './App.css'
import Home from './components/home';
import Navbar from './components/Navbar';
import About from './components/about';
import Work from './components/work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>

  );
}

export default App


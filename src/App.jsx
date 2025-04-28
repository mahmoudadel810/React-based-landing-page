import './App.css'
import Home from './components/home';
import Navbar from './components/Navbar';
import About from './components/about';
import Work from './components/work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
function App() {

  return (
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact/>
    </div>

  );
}

export default App


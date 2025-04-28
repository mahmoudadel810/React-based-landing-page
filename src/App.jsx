import './App.css'
import Home from './components/home';
import Navbar from './components/Navbar';
import About from './components/about';
import Work from './components/work';
import Testimonial from './components/Testimonial';
function App() {

  return (
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Testimonial/>
    </div>

  );
}

export default App


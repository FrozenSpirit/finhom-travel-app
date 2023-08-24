import './App.css';
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Destinations from './components/Destinations';
import Footer from './components/Footer'



function App() {
  return (
    <div>
      {/* For a Phenomenal Holiday */}
      <Navbar/>
      <Hero/>
      <Destinations/> 
      <Footer></Footer>

    </div>
    
  );
}

export default App;

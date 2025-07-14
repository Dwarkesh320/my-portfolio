import './App.css';
import Home from './components/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {

  // document.body.style.background = "url(https://cutewallpaper.org/21/stars-background-gif/Box-Office-Star-Wars-Force-Awakens-Tops-Avatar-to-.gif)";
  // document.body.style.backgroundRepeat = "no-repeat";
  // document.body.style.backgroundSize = "contain";

 
  return (
      // <div>
      //   <Navbar/>
      //   {/* <Contact />
      //   <Home/> */}
      // </div>
    <BrowserRouter>
      <div className="App">
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
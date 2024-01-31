
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Services" element={<Services/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>
</Routes>
    </div>
  );
}

export default App;

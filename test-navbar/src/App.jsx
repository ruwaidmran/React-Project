/*eslint-disabled*/
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Contact from './component/pages/Contact';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Services" element={<Services/>}/>
  <Route path="/Contact" element={<Contact/>}/>
</Routes>
    </div>
  );
}

export default App;

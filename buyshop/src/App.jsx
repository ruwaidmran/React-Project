/* eslint-disable*/
// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from "react-router-dom";
import Services from './component/Pages/Services';
import Navebar from './Navbar';
import "./Navbar.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
 <Navebar/>

 <Routes>
<Route path="/Services" element={ <Services/>}/>
 </Routes>
      </header>
    </div>
  );
}

export default App;
